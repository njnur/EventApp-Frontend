import { useState } from 'react';

const dataPerPage = 5;
const usePagination = () => {
  const [pageLimit, setPageLimit] = useState(dataPerPage);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const handlePageChange = newPage => {
    setOffset((newPage - 1) * pageLimit);
    setPage(newPage);
  };
  const resetPagination = () => {
    setPageLimit(dataPerPage);
    setOffset(0);
    setPage(0);
  };
  return { limit: pageLimit, offset, page, handlePageChange, resetPagination };
};

export default usePagination;
