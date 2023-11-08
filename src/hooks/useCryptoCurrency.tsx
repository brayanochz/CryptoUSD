import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

const useCryptoCurrency = () => {

  const cryptocurrencyClient = new CryptocurrencyClient()

  const getCoins = async (page: string) => {
    return await cryptocurrencyClient.getCoins(page)
  }

  const getCoinDetails = async (coinId: string) => {
    return await cryptocurrencyClient.getCoinDetails(coinId)
  }

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