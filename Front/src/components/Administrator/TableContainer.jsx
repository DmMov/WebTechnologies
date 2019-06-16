import React from 'react';
import { useSelector } from 'react-redux'
import Table from './Table';
const TableContainer = () => {
  const { loading, list } = useSelector(({ common: { loading }, users: { list } }) => ({ loading, list }) )
  return <Table users={list} isLoading={loading} />
};

export default TableContainer;