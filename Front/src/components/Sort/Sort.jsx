import React from 'react';
import { Select } from 'antd';
import { sortOptions } from '../../assets/constants/data/sortOptions';
import { SortPropTypes } from '../../assets/prop-types/Sort.prop-types';

const { Option } = Select;

const Sort = ({ onChange }) =>
   <Select style={{ width: '100%' }} size="large" placeholder="Select sort type" onChange={onChange}>
      { sortOptions.map(({ value, text }, i) => <Option key={i} value={value}>{text}</Option>) }
   </Select>

Sort.propTypes = SortPropTypes;

export default Sort;