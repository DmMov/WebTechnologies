import React from 'react';
import { Table as AntTable } from 'antd';
import { columns } from 'assets/data/columns';
import { TablePropTypes } from '../../assets/prop-types/Table.prop-types';

const Table = ({ isLoading, users }) =>
   <AntTable 
      loading={isLoading}
      pagination={{ pageSize: 15 }} 
      columns={columns} 
      dataSource={users} 
      rowKey={({ index }) => index} 
   />

Table.propTypes = TablePropTypes;

export default Table;