import React, { useState, useEffect } from 'react';
import SuccessfulConfirmMessage from './Message/SuccessfulConfirmMessage';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Icon } from 'antd';
import { withRouter, Redirect } from 'react-router-dom';
import { putRequest } from '../assets/services/request.service';

const ConfirmationControl = ({ match }) => {
   const [status, setStatus] = useState('');

   const { userId, confCode } = match.params;

   useEffect(() => {
      putRequest(`user/confirm-email/${userId}/${confCode}`, data => setStatus('success'), error => setStatus('error') )
   }, []);

   switch (status) {
      case 'success':
         let user = Cookies.getJSON('user');
         if (typeof(user) !== 'undefined' && JSON.stringify(user) != '{}' && user.id == userId) {
            user.emailConfirmed = true;
            Cookies.set('user', user, { expires: 7 });
            console.log('something');
         }
         return <SuccessfulConfirmMessage />

      case 'error':
         return <Redirect to="/404" />
         
      default:
         return <Icon type="loading" style={{ color: '#1890ff', fontSize: 50 }} />;
   }
};

export default withRouter(ConfirmationControl);