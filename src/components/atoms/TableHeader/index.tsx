import { ITableHeader } from '@/interfaces/table';
import React, { FC } from 'react';
import clsx from 'clsx';

interface TableHeaderProps {
  headers: ITableHeader
}

const TableHeader: FC<TableHeaderProps> = ({ headers }) => {

  const columnNames = Object.keys(headers || {})

  return (
    <thead className="text-xs text-white uppercase  dark:text-gray-700">
      <tr>
        {columnNames.map((columnName, index) => (
          <th
            key={`column-${headers[columnName]}`}
            scope="col"
            className={
              clsx(
                "px-6 py-3 bg-gray-100/10 dark:bg-gray-700/10",
                {
                  "rounded-l-lg": index === 0,
                  "rounded-r-lg": index === columnNames.length - 1,
                }
              )
            }>
            {columnName}
          </th>
        ))}
      </tr>
    </thead >
  );
};

export default TableHeader;