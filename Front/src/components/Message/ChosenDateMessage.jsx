import React from 'react';
import Message from './Message';
import { string } from 'prop-types';

const ChosenDateMessage = ({ studyDate }) => (
   <Message 
      messageClass="chosen-date-message" 
      iconType="schedule"
      title="a study date has already been chosen"
      messageText={`You have already chosen the date of study, it's ${studyDate}`}
   />
);

ChosenDateMessage.propTypes = {
   studyDate: string
}

export default ChosenDateMessage;