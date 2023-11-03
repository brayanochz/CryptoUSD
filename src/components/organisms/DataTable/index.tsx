import React, { FC } from 'react';
import Table from '../../molecules/Table';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { FilterType } from '@/types';

const columns = {
  Name: {
    key: 'name',
  },
  Symbol: {
    key: 'symbol',
  },
  Price: {
    key: 'price_usd',
    format: true
  },
  Rank: {
    key: 'rank'
  }
}

interface DataTableProps {
  page: string,
  filter: FilterType
}

const DataTable: FC<DataTableProps> = async ({ page, filter }) => {

  const cryptocurrencyClient = new CryptocurrencyClient()

  const coins = await cryptocurrencyClient.getCoins(page)

  const filteredData = coins.data.filter((coin) => {
    const nameFilter = coin.name.toLowerCase().includes((filter.name as string)?.toLowerCase())
    return nameFilter
  })

  return (
    <section className="relative max-h-70vh overflow-x-auto w-full">
      <Table data={filteredData} headers={columns} />
    </section>
  );
};

export default DataTable;