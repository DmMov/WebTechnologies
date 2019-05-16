import React from 'react';
import { Select } from 'antd';
import { func } from 'prop-types';
import { sortOptionsData } from '../../assets/constants/sortOptionsData';

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
         sortOptionsData.map(({ value, text }, i) => (
            <Option key={i} value={value} >{text}</Option>
         ))
      }
   </Select>
);

Sort.propTypes = {
   onChange: func.isRequired
}

export default Sort;