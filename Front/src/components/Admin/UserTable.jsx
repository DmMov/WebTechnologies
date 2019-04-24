import React from 'react';
import { bool } from 'prop-types';
import { columns_type, user_list_type } from '../../Prop-types';
import { Table } from 'antd';

const UserTable = ({ isLoading, columns, users }) => (
   <Table 
      loading={isLoading}
      pagination={{ pageSize: 8 }} 
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