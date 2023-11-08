import { IApiClient } from "@/interfaces/apiClient";
import { ApiClient } from "./ApiClient";
import { ExchangeRates } from "@/interfaces/exchangeRates";

/**
 * The `ExchangeCurrencyClient` class provides methods for interacting with an exchange rate API to retrieve currency exchange rates.
 * It uses an instance of the `IApiClient` interface for making API requests.
 *
 * @class
 */
export class ExchangeCurrencyClient {

  private apiClient: IApiClient;

  /**
   * Creates an instance of the `ExchangeCurrencyClient` class.
   *
   * @constructor
   * @param {string} [apiUrl] - The base URL of the exchange rate API. If not provided, it falls back to the value from the environment variables.
   * @throws {Error} Throws an error if the `apiUrl` is missing or invalid.
   */
  constructor(apiUrl?: string) {
    const url =  apiUrl || process.env.EXCHANGE_API
    if (!url) throw new Error("Invalid EXCHANGE_API");
    this.apiClient = new ApiClient(url)
  }

  /**
   * Retrieves exchange rates for different currencies based on the specified API key and base currency.
   *
   * @async
   * @returns {Promise<ExchangeRates>} - A promise that resolves to an object containing currency exchange rates.
   * @throws {Error} Throws an error if the required API key, base currency, or exchange rate endpoint is not defined.
   */
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