import React from 'react';
import Message from './Message';

const UnconfirmedEmailMessage = () => (
   <Message 
      messageClass="confirm-email-message" 
      iconType="mail"
      title="confirm your email"
      messageText="a link for email confirmation was sent to your email, please, confirm your email before to use possibilities of our web-site"
   />
);

export default UnconfirmedEmailMessage;