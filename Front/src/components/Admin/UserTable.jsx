import React from 'react';
import { Table } from 'antd';
import { columns } from 'assets/constants/data/columns';
import { UserTablePropTypes } from '../../assets/prop-types/UserTable.prop-types';
import { connect } from 'react-redux'

const UserTable = ({ isLoading, users }) => (
   <Table 
      loading={isLoading}
      pagination={{ pageSize: 15 }} 
      columns={columns} 
      dataSource={users} 
      rowKey={({ index }) => index} 
   />
);

UserTable.propTypes = UserTablePropTypes;

const mapStateToProps = ({ users: { list }, general: { isLoading } }) => ({ 
   users: list, 
   isLoading 
});

export default connect(mapStateToProps)(UserTable);