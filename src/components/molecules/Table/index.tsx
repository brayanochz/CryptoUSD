import TableContent from '@/components/atoms/TableContent';
import TableFooter from '@/components/atoms/TableFooter';
import TableHeader from '@/components/atoms/TableHeader';
import { ITableData } from '@/interfaces/table';
import React, { FC } from 'react';


const Table: FC<ITableData> = ({ data, headers }) => {

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <TableHeader headers={headers} />
      <TableContent data={data} headers={headers} />
      <TableFooter />
    </table>
  );
};

export default Table;