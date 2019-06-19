import React from 'react';
import { useSelector } from 'react-redux'
import Table from './Table';

const TableContainer = () => {
  const { fetching, list } = useSelector(({ common: { fetching }, users: { list } }) => ({ fetching, list }) )
  return <Table users={list} isLoading={fetching} />
};

export default TableContainer;