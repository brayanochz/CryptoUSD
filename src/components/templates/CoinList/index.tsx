import React, { FC } from 'react';
import OptionBar from '../../molecules/OptionBar';

interface CoinListProps {
  page: string
}
import DataTable from '../../organisms/DataTable';

const CoinList: FC<CoinListProps> = async ({ page }) => {

  return (
    <div>
      <OptionBar />
      <DataTable page={page} />
    </div>
  );
};

export default CoinList;