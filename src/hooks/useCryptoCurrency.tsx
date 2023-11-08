import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

/**
 * This is a custom hook that provides functions to fetch cryptocurrency data from an API.
 * @returns The `useCryptoCurrency` function returns an object with three properties: `getCoins`,
 * `getCoinDetails`, and `getMarkets`.
 */
const useCryptoCurrency = () => {

  const cryptocurrencyClient = new CryptocurrencyClient()

 /**
  * The above code defines three async functions that make API calls to retrieve cryptocurrency data.
  * @param {string} page - The `page` parameter is a string that represents the page number or
  * identifier for retrieving a list of coins. It is used in the `getCoins` function to fetch a list of
  * coins from the cryptocurrency client.
  * @returns The functions `getCoins`, `getCoinDetails`, and `getMarkets` are returning promises that
  * will resolve to the results of the corresponding API calls made by the `cryptocurrencyClient`
  * object.
  */
  const getCoins = async (page: string) => {
    return await cryptocurrencyClient.getCoins(page)
  }

  /**
   * The function `getCoinDetails` is an asynchronous function that retrieves details of a
   * cryptocurrency coin based on its ID.
   * @param {string} coinId - The `coinId` parameter is a string that represents the unique identifier
   * of a cryptocurrency.
   * @returns The function `getCoinDetails` is returning the result of the
   * `cryptocurrencyClient.getCoinDetails` function, which is awaited using the `await` keyword.
   */
  const getCoinDetails = async (coinId: string) => {
    return await cryptocurrencyClient.getCoinDetails(coinId)
  }

  /**
   * The function `getMarkets` is an asynchronous function that retrieves markets data for a given coin
   * ID using the `cryptocurrencyClient` API.
   * @param {string} coinId - The `coinId` parameter is a string that represents the unique identifier
   * of a cryptocurrency.
   * @returns The `getMarkets` function is returning a promise that resolves to the result of calling
   * `cryptocurrencyClient.getMarkets(coinId)`.
   */
  const getMarkets = async (coinId: string) => {
    return await cryptocurrencyClient.getMarkets(coinId)
  }

  return {
    getCoins,
    getCoinDetails,
    getMarkets
  }
};

export default useCryptoCurrency;