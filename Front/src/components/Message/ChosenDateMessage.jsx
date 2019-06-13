import React from 'react';
import Message from './Message';
import { ChosenDateMessagePropTypes } from '../../assets/prop-types/ChosenDateMessage.prop-types';

const ChosenDateMessage = ({ studyDate }) =>
   <Message 
      messageClass="chosen-date-message" 
      iconType="schedule"
      title="a study date has already been chosen"
      messageText={`You have already chosen the date of study, it's ${studyDate}`}
   />

ChosenDateMessage.propTypes = ChosenDateMessagePropTypes;

export default ChosenDateMessage;