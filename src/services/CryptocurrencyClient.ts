import { IApiClient } from "@/interfaces/apiClient";
import { ApiClient } from "./ApiClient";
import { CoinsResponse } from "@/interfaces/table";
import { Coin } from "@/interfaces/coins";
import { Market } from "@/interfaces/market";

/**
 * The `CryptocurrencyClient` class provides methods for interacting with a cryptocurrency API to retrieve coin data, coin details,
 * and market information. It uses an instance of the `IApiClient` interface for making API requests.
 *
 * @class
 */
export class CryptocurrencyClient {

  private apiClient: IApiClient;

  /**
   * Creates an instance of the `CryptocurrencyClient` class.
   *
   * @constructor
   * @param {string} [apiUrl] - The base URL of the cryptocurrency API. If not provided, it falls back to the value from the environment variables.
   * @throws {Error} Throws an error if the `apiUrl` is missing or invalid.
   */
  constructor(apiUrl?: string) {
    const url =  apiUrl || process.env.CRYPTOCURRENCY_API
    if (!url) throw new Error("Invalid CRYPTOCURRENCY_API");
    this.apiClient = new ApiClient(url as string)
  }

  /**
   * Retrieves a list of cryptocurrency coins with pagination support.
   *
   * @async
   * @param {string} pageRAW - The page number as a string.
   * @returns {Promise<CoinsResponse>} - A promise that resolves to a response containing a list of cryptocurrency coins.
   * @throws {Error} Throws an error if the coin endpoint is not defined.
   */
  async getCoins(pageRAW: string): Promise<CoinsResponse> {
    const page = parseInt(pageRAW)
    let url = `${process.env.CRYPTOCURRENCY_COIN_ENDPOINT}`
    if (page > 1) {
      const interval = {
        start: `${(page - 1) * 100}`,
        limit: '100'
      }
      const params = new URLSearchParams(interval)
      url = `${url}?${params}`
    }
    if (!url) throw new Error("Not COIN ENDPOINT");
    console.log(url)
    return this.apiClient.get<CoinsResponse>(url)
  }

  /**
   * Retrieves details of a specific cryptocurrency coin based on its ID.
   *
   * @async
   * @param {string} coinId - The ID of the cryptocurrency coin.
   * @returns {Promise<Coin[]>} - A promise that resolves to an array containing details of the specified cryptocurrency coin.
   * @throws {Error} Throws an error if the coin details endpoint is not defined.
   */
  async getCoinDetails(coinId: string): Promise<Coin[]> {
    const params = new URLSearchParams({
      id: coinId
    })
    const url = `${process.env.CRYPTOCURRENCY_COIN_DETAILS_ENDPOINT}?${params}`
    if (!url) throw new Error("Not COIN DETAILS ENDPOINT");
    return this.apiClient.get<Coin[]>(url)
  }

  /**
   * Retrieves market information for a specific cryptocurrency coin based on its ID.
   *
   * @async
   * @param {string} coinId - The ID of the cryptocurrency coin.
   * @returns {Promise<Market[]>} - A promise that resolves to an array containing market information for the specified cryptocurrency coin.
   * @throws {Error} Throws an error if the coin markets endpoint is not defined.
   */
  async getMarkets(coinId: string): Promise<Market[]> {
    const params = new URLSearchParams({
      id: coinId
    })
    const url = `${process.env.CRYPTOCURRENCY_MARKETS}?${params}`
    if (!url) throw new Error("Not COIN MARKETS ENDPOINT");
    return this.apiClient.get<Market[]>(url)
  }

}