import React from 'react';
import { Select } from 'antd';
import { func } from 'prop-types';

const { Option } = Select;

const Sort = ({ onChange }) => (
   <Select
      showSearch
      style={{ width: '100%' }}
      size="large"
      placeholder="Select sort type"
      optionFilterProp="children"
      onChange={onChange}
   >
      <Option value="registered-date">Sort By Registered Date ↑</Option>
      <Option value="registered-date-descending">Sort By Registered Date ↓</Option>
      <Option value="name">Sort By Name ↑</Option>
      <Option value="name-descending">Sort By Name ↓</Option>
      <Option value="age">Sort By Age ↑</Option>
      <Option value="age-descending">Sort By Age ↓</Option>
      <Option value="email">Sort By Email ↑</Option>
      <Option value="email-descending">Sort By Email ↓</Option>
   </Select>
);

Sort.propTypes = {
   onChange: func.isRequired
}

export default Sort;