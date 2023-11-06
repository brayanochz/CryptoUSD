import React, { FC } from 'react';
import OptionBar from '../../organisms/OptionBar';
import DataTable from '../../organisms/DataTable';
import { FilterType } from '@/types';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { Coin } from '@/interfaces/coins';
import { ExchangeCurrencyClient } from '@/services/ExchangeCurrencyClient';
import { ExchangeRates } from '@/interfaces/exchangeRates';
import { currencyMock } from '@/mock/currency';

interface CoinListProps {
  page: string,
  filter: FilterType
}

const CoinList: FC<CoinListProps> = async ({ page, filter }) => {
  const cryptocurrencyClient = new CryptocurrencyClient()
  //const exchangeClient = new ExchangeCurrencyClient()


  //const exchanges = await exchangeClient.getCurrencies()
  const exchanges: ExchangeRates = currencyMock
  const coins = await cryptocurrencyClient.getCoins(page)

  const arrayFilter = Object.keys(filter).filter((filterName) => {
    return filterName !== 'currency'
  })

  const baseCurrency = (filter['currency']) as string

  const baseCurrencyValue = baseCurrency && baseCurrency !== '' && baseCurrency !== process.env.BASE_CURRENCY ?
    (exchanges.exchange_rates.hasOwnProperty(baseCurrency) ?
      exchanges.exchange_rates[baseCurrency] :
      1) :
    1

  const filteredData = arrayFilter.length > 0 ? arrayFilter.reduce<Coin[]>(
    (previous, current) => {
      const currentKey = current as keyof Coin
      if (previous?.length <= 0) {
        return coins.data.filter((coin: Coin) => {
          return coin[currentKey]?.toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
        })
      }
      return previous.filter((coin: Coin) => {
        if (current === undefined) return coin
        return coin[currentKey]?.toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
      })
    },
    []
  ) : coins.data

  const exchangeData = filteredData.map(
    (coin: Coin) => ({
      ...coin,
      price: (parseFloat(coin.price_usd) * baseCurrencyValue).toString()
    })
  )

  const currencies = [
    {
      label: process.env.BASE_CURRENCY as string,
      value: process.env.BASE_CURRENCY as string
    },
    ...Object.keys(exchanges.exchange_rates).map(rate => ({
      label: rate,
      value: rate
    }))
  ]

  return (
    <div>
      <OptionBar filter={filter} currencies={currencies} selectedCurrency={baseCurrency} />
      <DataTable data={exchangeData} />
    </div>
  );
};

export default CoinList;