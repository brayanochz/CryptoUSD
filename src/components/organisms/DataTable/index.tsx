import React, { FC } from 'react';
import Table from '../../molecules/Table';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';

const columns = {
  Name: 'name',
  Symbol: 'symbol',
  Price: 'price_usd',
  Rank: 'rank'
}

interface DataTableProps {
  page: string
}

const DataTable: FC<DataTableProps> = async ({ page }) => {

  const cryptocurrencyClient = new CryptocurrencyClient()

  const coins = await cryptocurrencyClient.getCoins(page)

  return (
    <section className="relative max-h-70vh overflow-x-auto w-full">
      <Table data={coins.data} headers={columns} />
    </section>
  );
};

export default DataTable;