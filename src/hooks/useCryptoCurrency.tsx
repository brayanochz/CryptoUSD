import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

const useCryptoCurrency = () => {

  const cryptocurrencyClient = new CryptocurrencyClient()

  const getCoins = async (page: string) => {
    const coins = await cryptocurrencyClient.getCoins(page)
    return coins
  }

  const getCoinDetails = async (coinId: string) => {
    const detail = await cryptocurrencyClient.getCoinDetails(coinId)
    return detail
  }

  return {
    getCoins,
    getCoinDetails
  }
};

export default useCryptoCurrency;