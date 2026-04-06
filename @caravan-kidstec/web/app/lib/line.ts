import { messagingApi } from "@line/bot-sdk"

const clientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || "",
}

export const client: messagingApi.MessagingApiClient =
  new messagingApi.MessagingApiClient(clientConfig)
