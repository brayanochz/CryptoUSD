import { Coin } from '@/interfaces/coins';
import { ITableData } from '@/interfaces/table';
import React, { FC } from 'react';

const TableContent: FC<ITableData> = ({ data, headers }) => {

  const dataKeys = Object.values(headers || {})

  return (
    <tbody className='max-h-10 overflow-y-scroll'>
      {
        data.map((coin: Coin) => (
          <tr key={coin.id} className="bg-white dark:bg-gray-800">
            {dataKeys.map((key: string) => (
              <td key={`coin-${key}`} className="px-6 py-4">
                {coin[key as keyof Coin]}
              </td>
            ))}
          </tr>
        ))
      }
    </tbody >
  );
};

export default TableContent;