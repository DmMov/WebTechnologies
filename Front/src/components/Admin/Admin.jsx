import React from 'react';
import SortContainer from '../Sort/SortContainer';
import SearchContainer from '../Search/SearchContainer';
import { user_list_type } from '../../Prop-types';
import { bool } from 'prop-types';
import UserTable from './UserTable';

const Admin = ({ users, isLoading }) => (
   <div className="admin-layout-wrap grid">
      <SearchContainer />
      <SortContainer />
      <UserTable 
         isLoading={isLoading}
         users={users} 
      />
   </div>  
);

Admin.propTypes = {
   users: user_list_type,
   loading: bool,
}

export default Admin;