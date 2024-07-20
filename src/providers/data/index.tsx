import { GraphQLClient } from "@refinedev/nestjs-query";
import { fetchWrapper } from "./fetch-wrapper";
import { createClient } from "graphql-ws";

export const API_URL = 'https://api.cm.refine.dev'
export const WS_URL = 'wss://api.crm.refine.dev/graphql'

export const client = new GraphQLClient(API_URL,{
  fetch: (url: string, options: RequestInit) => {
    try {
      return fetchWrapper(url, options)
    } catch (error) {
      return Promise.reject(error as Error)
    }
  }
})

// WebSocket (to update the page without reload it)
export const wsClient = typeof window !== "undefined"
? createClient({
  url:
})

