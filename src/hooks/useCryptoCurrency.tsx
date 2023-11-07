import { CryptocurrencyClient } from "@/services/CryptocurrencyClient";

const useCryptoCurrency = () => {

  const cryptocurrencyClient = new CryptocurrencyClient()

  const getCoins = async (page: string) => {
    const coins = await cryptocurrencyClient.getCoins(page)
    return coins
  }

  return {
    getCoins
  }
};

export default useCryptoCurrency;