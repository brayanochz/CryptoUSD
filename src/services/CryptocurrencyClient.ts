"use client";
import { IApiClient } from "@/interfaces/apiClient";
import { Coin } from "@/interfaces/coins";
import { ApiClient } from "./clients/ApiClient";
import { CoinsResponse } from "@/interfaces/table";

export class CryptocurrencyClient {

  private apiClient: IApiClient;

  constructor() {
    this.apiClient = new ApiClient()
  }

  async getCoins(): Promise<CoinsResponse> {
    const url = process.env.NEXT_PUBLIC_CRYPTOCURRENCY_COIN_ENDPOINT
    if (!url) throw new Error("Not COIN ENDPOINT");
    return this.apiClient.get<CoinsResponse>(url)
  }


}