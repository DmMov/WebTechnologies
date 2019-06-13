import React from 'react';
import SortContainer from '../Sort/SortContainer';
import SearchContainer from '../_Forms/SearchContainer';
import TableContainer from './TableContainer';

const Administrator = () =>
   <div className="admin-layout-wrap grid">
      <SearchContainer />
      <SortContainer />
      <TableContainer />
   </div>

export default Administrator;