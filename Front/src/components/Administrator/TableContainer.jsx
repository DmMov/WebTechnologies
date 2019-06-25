import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';

const TableContainer = () => {
  const { fetching, users } = useSelector(({ common: { fetching }, users }) => ({ fetching, users }) )
  return <Table users={users} isLoading={fetching} />
};

export default TableContainer;