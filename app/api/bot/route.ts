import { client } from "@/app/lib/line"
import {
  HTTPFetchError,
  type MessageAPIResponseBase,
  validateSignature,
  type webhook,
} from "@line/bot-sdk"

export function GET(): Response {
  return Response.json({
    status: "success",
    message: "Connected successfully!",
  })
}

export async function POST(request: Request): Promise<Response> {
  const body: ArrayBuffer = await request.arrayBuffer()
  const buffer: Buffer = Buffer.from(body)

  const isValidSignature: string = middleware(request, buffer)
  if (isValidSignature) {
    return Response.json({
      status: "error",
      message: isValidSignature,
    })
  }

  const callbackRequest: webhook.CallbackRequest = JSON.parse(buffer.toString())
  const events: webhook.Event[] = callbackRequest.events

  const results = await Promise.all(
    events.map(async (event: webhook.Event) => {
      try {
        await textEventHandler(event)
      } catch (error: unknown) {
        if (error instanceof HTTPFetchError) {
          console.error(error.status)
          console.error(error.headers.get("x-line-request-id"))
          console.error(error.body)
        } else if (error instanceof Error) {
          console.error(error)
        }

        return Response.json({
          status: "error",
        })
      }
    }),
  )

  return Response.json({
    status: "success",
    results,
  })
}

async function textEventHandler(
  event: webhook.Event,
): Promise<MessageAPIResponseBase | undefined> {
  if (event.type !== "message" || event.message.type !== "text") {
    return
  }

  if (!event.replyToken) {
    return
  }

  if (event.message.text.includes("参加申込")) {
    await client.replyMessage({
      replyToken: event.replyToken,
      messages: [
        {
          type: "text",
          text: "定員に達したため、\n申込受付を終了しました。\n次回募集をお待ち下さい。",
        },
      ],
    })
    return
  }
}

function middleware(request: Request, buffer: Buffer): string {
  const signature: string = request.headers.get("x-line-signature") || ""
  if (!signature) {
    return "No signature"
  }

  const secret: string = process.env.CHANNEL_SECRET || ""
  if (!validateSignature(buffer, secret, signature)) {
    return "signature validation failed"
  }

  return ""
}
