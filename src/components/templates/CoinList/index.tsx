import React, { FC } from 'react';
import OptionBar from '../../organisms/OptionBar';
import DataTable from '../../organisms/DataTable';
import { FilterType } from '@/types';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { Coin } from '@/interfaces/coins';
import { ExchangeCurrencyClient } from '@/services/ExchangeCurrencyClient';
import { ExchangeRates } from '@/interfaces/exchangeRates';
import { currencyMock } from '@/mock/currency';
import useCryptoCurrency from '@/hooks/useCryptoCurrency';
import useCurrencyExchange from '@/hooks/useCurrencyExchange';
import useFilter from '@/hooks/useFilter';

interface CoinListProps {
  page: string,
  filter: FilterType
}

const CoinList: FC<CoinListProps> = async ({ page, filter }) => {

  const { getCoins } = useCryptoCurrency()
  const { getCurrencyData, convertCurrency, getCurrencyOptions } = useCurrencyExchange()
  const { filterData } = useFilter()

  const coins = await getCoins(page)

  const baseCurrency = (filter['currency']) as string

  const { baseCurrencyValue, exchanges } = await getCurrencyData(baseCurrency)

  const filteredData = filterData(coins.data, filter)

  const convertData = convertCurrency(filteredData, baseCurrencyValue)

  const currencies = getCurrencyOptions(exchanges.exchange_rates);

  return (
    <div>
      <OptionBar filter={filter} currencies={currencies} selectedCurrency={baseCurrency} />
      <DataTable data={convertData} />
    </div>
  );
};

export default CoinList;