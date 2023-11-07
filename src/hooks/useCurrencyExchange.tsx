import { Coin } from "@/interfaces/coins";
import { ExchangeRates, Rates } from "@/interfaces/exchangeRates";
import { currencyMock } from "@/mock/currency";

const useCurrencyExchange = () => {

  //const exchangeClient = new ExchangeCurrencyClient()

  const getCurrencyData = async (baseCurrency: string) => {
    //const exchanges = await exchangeClient.getCurrencies()
    const exchanges: ExchangeRates = currencyMock

    const baseCurrencyValue = baseCurrency && baseCurrency !== '' && baseCurrency !== process.env.BASE_CURRENCY ?
      (exchanges.exchange_rates.hasOwnProperty(baseCurrency) ?
        exchanges.exchange_rates[baseCurrency] :
        1) :
      1

    return {
      baseCurrencyValue,
      exchanges
    }
  }

  const convertCurrency = (data: Coin[], currencyValue: number) => {
    const convertData = data.map(
      (coin: Coin) => ({
        ...coin,
        price: (parseFloat(coin.price_usd) * currencyValue).toString()
      })
    )
    return convertData
  }

  const getCurrencyOptions = (rates: Rates) => {
    return [
      {
        label: process.env.BASE_CURRENCY as string,
        value: process.env.BASE_CURRENCY as string
      },
      ...Object.keys(rates).map(rate => ({
        label: rate,
        value: rate
      }))
    ]
  }

  return {
    getCurrencyData,
    convertCurrency,
    getCurrencyOptions
  }
};

export default useCurrencyExchange;