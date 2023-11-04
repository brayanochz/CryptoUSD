import { IApiClient } from "@/interfaces/apiClient";
import { ApiClient } from "./ApiClient";
import { CoinsResponse } from "@/interfaces/table";

export const revalidate = 3600
export class CryptocurrencyClient {

  private apiClient: IApiClient;

  constructor() {
    this.apiClient = new ApiClient()
  }

  async getCoins(pageRAW: string): Promise<CoinsResponse> {
    const page = parseInt(pageRAW)
    const interval = {
      start: `${(page - 1) * 100}`,
      limit: '100'
    }
    const params = new URLSearchParams(interval)
    const url = `${process.env.CRYPTOCURRENCY_COIN_ENDPOINT}?${params}`
    console.log(url)
    if (!url) throw new Error("Not COIN ENDPOINT");
    return this.apiClient.get<CoinsResponse>(url)
  }

}