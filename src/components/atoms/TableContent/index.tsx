import { Coin } from '@/interfaces/coins';
import { ITableData, ITableHeader, ITableHeaderColumn } from '@/interfaces/table';
import { PriceFormatter } from '@/utils/prices';
import React, { FC } from 'react';

const TableContent: FC<ITableData> = ({ data, headers }) => {

  const priceFormatter = PriceFormatter()

  return (
    <tbody className='max-h-10 overflow-y-scroll text-white'>
      {
        data.map((coin: Coin) => (
          <tr key={coin.id} className="dark:bg-gray-800">
            {Object.values(headers).map((header: ITableHeaderColumn) => (
              <td key={`coin-${header.key}`} className="px-6 py-4">
                {
                  header.format ?
                    priceFormatter.format(
                      parseFloat(coin[header.key as keyof Coin] as string)
                    ) :
                    coin[header.key as keyof Coin]
                }
              </td>
            ))}
          </tr>
        ))
      }
    </tbody >
  );
};

export default TableContent;