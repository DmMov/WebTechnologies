import React from 'react';
import { DatePicker, Icon } from 'antd';
import withSpin from '../withFetching';
import { PickStudyDatePropTypes } from '../../assets/prop-types/PickStudyDate.prop-types';

const PickStudyDate = ({ onDateChange, onConfirmDate, disabledDate, confirmIsVisible }) =>
   <div className="pick-study-date grid">
      <Icon type="calendar" theme="filled" style={{ fontSize: '50px', color: '#1890ff' }} />
      <h1 className="choose-date-title">choose a date of study</h1>
      <span className="text">if you want to change the study date then choose new date and press <br/>"confirm"</span>
      <DatePicker showToday={false} disabledDate={disabledDate} size="large" onChange={onDateChange} />
      {confirmIsVisible && <button className="btn" onClick={onConfirmDate}>confirm</button>}
   </div>

PickStudyDate.propTypes = PickStudyDatePropTypes;

export default withSpin(PickStudyDate);