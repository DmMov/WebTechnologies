import { endOf } from 'moment';

export const disabledDate = current => 
  current && current < endOf('day').add(1, 'day') || current > endOf('day').add(3, 'month');
