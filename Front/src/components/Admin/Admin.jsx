import React from 'react';
import SortContainer from '../Sort/SortContainer';
import SearchContainer from '../_Forms/SearchContainer';
import UserTable from './UserTable';

const Admin = () =>
   <div className="admin-layout-wrap grid">
      <SearchContainer />
      <SortContainer />
      <UserTable />
   </div>

export default Admin;