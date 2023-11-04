import React, { FC } from 'react';
import Table from '../../molecules/Table';
import { CryptocurrencyClient } from '@/services/CryptocurrencyClient';
import { FilterType } from '@/types';
import { Coin } from '@/interfaces/coins';

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
  data: Coin[]
}

const DataTable: FC<DataTableProps> = async ({ data }) => {



  return (
    <section className="relative max-h-70vh overflow-x-auto w-full">
      <Table data={data} headers={columns} />
    </section>
  );
};

export default DataTable;