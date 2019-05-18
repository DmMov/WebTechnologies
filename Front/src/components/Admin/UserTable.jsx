import React from 'react';
import { bool } from 'prop-types';
import { columns_type, user_list_type } from '../../Prop-types';
import { Table } from 'antd';
import { columns } from 'assets/constants/data/columns';

const UserTable = ({ isLoading, users }) => (
   <Table 
      loading={isLoading}
      pagination={{ pageSize: 15 }} 
      columns={columns} 
      dataSource={users} 
      rowKey={({ index }) => index} 
   />
);

UserTable.propTypes = {
   isLoading: bool,
   columns: columns_type,
   users: user_list_type
}

export default UserTable;