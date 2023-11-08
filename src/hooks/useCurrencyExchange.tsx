import { Coin } from "@/interfaces/coins";
import { ExchangeRates, Rates } from "@/interfaces/exchangeRates";
import { currencyMock } from "@/mock/currency";

const useCurrencyExchange = () => {

  //const exchangeClient = new ExchangeCurrencyClient()

  /**
   * The `getCurrencyData` method is an asynchronous function that takes a `baseCurrency` parameter of type string.
   * This function retrieves data related to the base currency and its exchange rates.
   *
   * @param {string} baseCurrency - The base currency for conversion, represented as a currency code (e.g., "USD").
   *
   * @returns {Promise<{ baseCurrencyValue: number, exchanges: ExchangeRates }>} - The function returns a promise that resolves to an object
   * with two properties: `baseCurrencyValue` and `exchanges`. `baseCurrencyValue` represents the value of the base currency relative to the system's base currency,
   * while `exchanges` contains an object with exchange rates for various currencies.
   */
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

  /**
   * The `convertCurrency` method is a function that takes an array of `Coin` objects and a numeric `currencyValue`.
   * It converts the price of each `Coin` object to the desired currency using the provided conversion value.
   *
   * @param {Coin[]} data - An array of `Coin` objects, where each object has a `price_usd` property representing the price in USD.
   * @param {number} currencyValue - The conversion value to be used for converting prices from the base currency to the desired currency.
   *
   * @returns {Coin[]} - The function returns a new array of `Coin` objects, where each object has its price converted to the desired currency.
   */
  const convertCurrency = (data: Coin[], currencyValue: number) => {
    const convertData = data.map(
      (coin: Coin) => ({
        ...coin,
        price: (parseFloat(coin.price_usd) * currencyValue).toString()
      })
    )
    return convertData
  }

  /**
   * The function `getCurrencyOptions` returns an array of currency options, including the base
   * currency and all the rates.
   * @param {Rates} rates - The `rates` parameter is an object that represents the exchange rates for
   * different currencies. It is expected to have currency codes as keys and corresponding exchange
   * rates as values.
   * @returns The function `getCurrencyOptions` returns an array of currency options. The first option
   * in the array is the base currency, which is obtained from the `BASE_CURRENCY` environment
   * variable. The remaining options in the array are obtained from the `rates` object, where each key
   * in the `rates` object represents a currency label and value.
   */
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