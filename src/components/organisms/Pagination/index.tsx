'use client'
import { useCustomRouter } from '@/hooks/useCustomRouter';
import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  totalRecords: number,
  recordsPerPage: number,
  actualPage?: number
}

const Pagination: FC<PaginationProps> = ({ totalRecords, recordsPerPage, actualPage = 0 }) => {

  const router = useCustomRouter()

  const pageCount = Math.ceil(totalRecords / recordsPerPage)

  console.log(pageCount)

  const onSelect = (page: { selected: number; }) => {
    const pageSelected = page.selected + 1;
    if (pageSelected >= 1) {
      router.push(`/home/${pageSelected}`, { preserveQuery: true })
    }
  }

  return (
    <div id={actualPage.toString()}>
      <span>{pageCount}</span>
      <span>{actualPage}</span>
      <ReactPaginate
        breakLabel="..."
        pageCount={pageCount}
        pageRangeDisplayed={5}
        previousLabel='<'
        nextLabel='>'
        onPageChange={onSelect}
        renderOnZeroPageCount={null}
        onClick={onSelect}
        initialPage={actualPage - 1}
        containerClassName='flex flex-row w-full justify-center items-center'
        pageClassName='my-1 rounded-lg bg-gray-500 color-white px-2'
        previousClassName='mx-2'
        nextClassName='mx-2'
        activeClassName='bg-gray-700'
      />
    </div>
  );
};

export default Pagination;