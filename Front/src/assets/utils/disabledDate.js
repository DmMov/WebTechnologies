import moment from 'moment';

export const disabledDate = current => 
  current && current < moment().endOf('day').add(1, 'day') || current > moment().endOf('day').add(3, 'month');
