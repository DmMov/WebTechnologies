import React from 'react';
import SortContainer from '../Sort/SortContainer';
import SearchContainer from '../Search/SearchContainer';
import UserTable from './UserTable';

const Admin = () => (
   <div className="admin-layout-wrap grid">
      <SearchContainer />
      <SortContainer />
      <UserTable />
   </div>  
);

export default Admin;