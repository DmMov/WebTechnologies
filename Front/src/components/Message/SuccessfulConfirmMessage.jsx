import React from 'react';
import Message from './Message';

const SuccessfulConfirmMessage = () => (
   <Message
      messageClass="successful-confirm-message"
      iconType="check-circle"
      title="successful confirm"
      messageText="your email address was successfully confirmed"
   />
);

export default SuccessfulConfirmMessage;