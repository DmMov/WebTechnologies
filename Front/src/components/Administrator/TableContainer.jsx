import React from 'react';
import { useSelector } from 'react-redux'
import Table from './Table';
const TableContainer = () => {
  const { isLoading, list } = useSelector(({ general: { isLoading }, users: { list } }) => ({ isLoading, list }) )
  return <Table users={list} isLoading={isLoading} />
};

export default TableContainer;