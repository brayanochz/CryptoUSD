import { IApiClient } from "@/interfaces/apiClient";
import { ApiClient } from "./ApiClient";
import { CoinsResponse } from "@/interfaces/table";
import { Coin } from "@/interfaces/coins";

export const revalidate = 3600
export class CryptocurrencyClient {

  private apiClient: IApiClient;

  constructor(apiUrl?: string) {
    const url =  apiUrl || process.env.CRYPTOCURRENCY_API
    if (!url) throw new Error("Invalid CRYPTOCURRENCY_API");
    this.apiClient = new ApiClient(url as string)
  }

  async getCoins(pageRAW: string): Promise<CoinsResponse> {
    const page = parseInt(pageRAW)
    const interval = {
      start: `${(page - 1) * 100}`,
      limit: '100'
    }
    const params = new URLSearchParams(interval)
    const url = `${process.env.CRYPTOCURRENCY_COIN_ENDPOINT}?${params}`
    if (!url) throw new Error("Not COIN ENDPOINT");
    return this.apiClient.get<CoinsResponse>(url)
  }

  async getCoinDetails(coinId: string): Promise<Coin[]> {
    const params = new URLSearchParams({
      id: coinId
    })
    const url = `${process.env.CRYPTOCURRENCY_COIN_DETAILS_ENDPOINT}?${params}`
    if (!url) throw new Error("Not COIN DETAILS ENDPOINT");
    return this.apiClient.get<Coin[]>(url)
  }

}