import { client } from '@/app/lib/line'
import type { MessageAPIResponseBase, webhook } from '@line/bot-sdk'
import { HTTPFetchError } from '@line/bot-sdk'

export function GET(): Response {
  return Response.json({
    status: 'success',
    message: 'Connected successfully!',
  })
}

export async function POST(request: Request): Promise<Response> {
  const callbackRequest: webhook.CallbackRequest =
    request.body as unknown as webhook.CallbackRequest
  const events: webhook.Event[] = callbackRequest.events

  const results = await Promise.all(
    events.map(async (event: webhook.Event) => {
      try {
        await textEventHandler(event)
      } catch (error: unknown) {
        if (error instanceof HTTPFetchError) {
          console.error(error.status)
          console.error(error.headers.get('x-line-request-id'))
          console.error(error.body)
        } else if (error instanceof Error) {
          console.error(error)
        }

        // Return an error message.
        return Response.json({
          status: 'error',
        })
      }
    }),
  )

  return Response.json({
    status: 'success',
    results,
  })
}

async function textEventHandler(
  event: webhook.Event,
): Promise<MessageAPIResponseBase | undefined> {
  // Check if for a text message
  if (event.type !== 'message' || event.message.type !== 'text') {
    return
  }

  // Check if message is repliable
  if (!event.replyToken) {
    return
  }

  // Create a new message.
  // Reply to the user.
  await client.replyMessage({
    replyToken: event.replyToken,
    messages: [
      {
        type: 'text',
        text: event.message.text,
      },
    ],
  })
}
