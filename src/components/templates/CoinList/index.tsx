import React, { FC } from 'react';
import OptionBar from '../../organisms/OptionBar';
import DataTable from '../../organisms/DataTable';
import { FilterType } from '@/types';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { Coin } from '@/interfaces/coins';

interface CoinListProps {
  page: string,
  filter: FilterType
}

const CoinList: FC<CoinListProps> = async ({ page, filter }) => {

  const cryptocurrencyClient = new CryptocurrencyClient()

  const coins = await cryptocurrencyClient.getCoins(page)

  const arrayFilter = Object.keys(filter)

  const filteredData = arrayFilter.reduce<Coin[]>(
    (previous, current) => {
      if (previous?.length <= 0) {
        return coins.data.filter((coin: Coin) => {
          return coin[current as keyof Coin].toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
        })
      }
      return previous.filter((coin: Coin) => {
        return coin[current as keyof Coin].toString().toLowerCase().includes((filter[current] as string)?.toString().toLowerCase())
      })
    },
    []
  )

  return (
    <div>
      <OptionBar filter={filter} />
      <DataTable data={filteredData} />
    </div>
  );
};

export default CoinList;