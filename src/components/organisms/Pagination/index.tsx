'use client'
import { useCustomRouter } from '@/hooks/useCustomRouter';
import React, { FC } from 'react';
import { Pagination as NextPagination } from "@nextui-org/react";

interface PaginationProps {
  totalRecords: number,
  recordsPerPage: number,
  actualPage?: number
}

const Pagination: FC<PaginationProps> = ({ totalRecords, recordsPerPage, actualPage = 0 }) => {

  const router = useCustomRouter()

  const pageCount = Math.ceil(totalRecords / recordsPerPage)

  const onSelect = (pageSelected: number) => {
    if (pageSelected >= 1) {
      router.push(`/home/${pageSelected}`, { preserveQuery: true })
    }
  }

  return (
    <div id={actualPage.toString()}>
      <NextPagination isCompact total={pageCount} initialPage={actualPage} onChange={onSelect} />
    </div>
  );
};

export default Pagination;