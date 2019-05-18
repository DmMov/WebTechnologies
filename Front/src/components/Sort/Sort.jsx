import React from 'react';
import { Select } from 'antd';
import { func } from 'prop-types';
import { sortOptions } from '../../assets/constants/data/sortOptions';

const { Option } = Select;

const Sort = ({ onChange }) => (
   <Select
      showSearch
      style={{ width: '100%' }}
      size="large"
      placeholder="Select sort type"
      onChange={onChange}
   >
      {
         sortOptions.map(({ value, text }, i) => (
            <Option key={i} value={value} >{text}</Option>
         ))
      }
   </Select>
);

Sort.propTypes = {
   onChange: func.isRequired
}

export default Sort;