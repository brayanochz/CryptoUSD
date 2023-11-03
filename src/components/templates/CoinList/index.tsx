import React, { FC } from 'react';
import OptionBar from '../../molecules/OptionBar';
import DataTable from '../../organisms/DataTable';
import { FilterType } from '@/types';

interface CoinListProps {
  page: string,
  filter: FilterType
}

const CoinList: FC<CoinListProps> = async ({ page, filter }) => {

  return (
    <div>
      <OptionBar filter={filter} />
      <DataTable page={page} filter={filter} />
    </div>
  );
};

export default CoinList;