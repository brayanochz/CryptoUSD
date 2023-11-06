import { IApiClient } from "@/interfaces/apiClient";
import { ApiClient } from "./ApiClient";
import { ExchangeRates } from "@/interfaces/exchangeRates";

export const revalidate = 3600
export class ExchangeCurrencyClient {

  private apiClient: IApiClient;

  constructor() {
    if (!process.env.EXCHANGE_API) throw new Error("Invalid EXCHANGE_API");
    this.apiClient = new ApiClient(process.env.EXCHANGE_API)
  }

  async getCurrencies(): Promise<ExchangeRates> {
    const apiParams = {
      api_key: process.env.EXCHANGE_API_KEY as string,
      base: process.env.BASE_CURRENCY as string
    }
    const urlParams = new URLSearchParams(apiParams)
    const url = `${process.env.EXCHANGE_LIVE_ENDPOINT}?${urlParams}`
    return this.apiClient.get<ExchangeRates>(url)
  }

}