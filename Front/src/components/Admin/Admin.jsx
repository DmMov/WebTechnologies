import React from 'react';
import SortContainer from '../Sort/SortContainer';
import SearchContainer from '../Search/SearchContainer';
import { user_list_type, columns_type } from '../../Prop-types';
import { bool } from 'prop-types';
import UserTable from './UserTable';

const Admin = ({ users, isLoading, columns }) => (
   <div className="admin-layout-wrap grid">
      <SearchContainer />
      <SortContainer />
      <UserTable 
         isLoading={isLoading}
         columns={columns} 
         users={users} 
      />
   </div>  
);

Admin.propTypes = {
   users: user_list_type,
   loading: bool,
   columns: columns_type
}

export default Admin;