import type { ClientConfig } from '@line/bot-sdk'
import { messagingApi } from '@line/bot-sdk'

const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
}

export const client: messagingApi.MessagingApiClient =
  new messagingApi.MessagingApiClient(clientConfig)
