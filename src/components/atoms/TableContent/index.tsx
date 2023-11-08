import { Coin } from '@/interfaces/coins';
import { ITableData, ITableHeader, ITableHeaderColumn } from '@/interfaces/table';
import { PriceFormatter } from '@/utils/prices';
import Image from 'next/image';
import Link from 'next/link';
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
                    header.key === "name" ?
                      <Link className='flex flex-row' href={`/details/${coin.id}`} target='_blank'>
                        {coin[header.key as keyof Coin]}
                        <Image
                          src="/show-more.svg"
                          alt="show more"
                          width={20}
                          height={20}
                          priority
                          className='mx-2'
                        />
                      </Link> : coin[header.key as keyof Coin]
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