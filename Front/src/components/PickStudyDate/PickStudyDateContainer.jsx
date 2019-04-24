import React, { useState } from 'react';
import ChosenDateMessage from '../Message/ChosenDateMessage';
import PickStudyDate from './PickStudyDate';
import { user_type } from '../../Prop-types';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { changeStudyDate } from '../../store/user/actions';
import { setIsLoading } from '../../store/actions';
import moment from 'moment';
import { domain } from '../../domain';
import { func } from 'prop-types';
import UnconfirmedEmailMessage from '../Message/UnconfirmedEmailMessage';
import withHeader from '../withHeader';

const disabledDate = current => {
   return current && current < moment().endOf('day').add(1, 'day') || current > moment().endOf('day').add(3, 'month');
}

const PickStudyDateContainer = ({ user, changeStudyDate, setIsLoading }) => {
   const [date, setDate] = useState('');
   const { studyDate, emailConfirmed } = user;
   const onConfirmDate = () => {
      setIsLoading(true);
      let localUser = user;
      Axios.put(`${domain}user/set-study-date/${localUser.id}/${date}`, 
      {}, 
      { headers: { Authorization: "Bearer " + localUser.token } })
      .then(({ data }) => {
         setIsLoading(false);
         localUser.studyDate = data;
         Cookies.set('user', localUser, { expires: 7 });
         changeStudyDate(data);
      })
      .catch(error => !!error.response && console.log(error.response));
   }

   const onDateChange = (date, dateStr) => setDate(dateStr);

   if (!emailConfirmed) {
      return <UnconfirmedEmailMessage />
   }

   if(!!studyDate) {
      return (
         <ChosenDateMessage 
            studyDate={studyDate} 
         />
      );
   } else {
      return (
         <PickStudyDate 
            onConfirmDate={onConfirmDate}
            onDateChange={onDateChange}
            disabledDate={disabledDate}
            confirmIsVisible={!!date}
         />
      );
   } 
};

PickStudyDateContainer.propTypes = {
   user: user_type,
   changeStudyDate: func.isRequired,
   setIsLoading: func.isRequired
}

const mapStateToProps = ({ user }) => ({ 
   user 
});

const mapDispatchToProps = { 
   changeStudyDate,
   setIsLoading 
};

const ConnectedPickStudyDateContainer = connect(mapStateToProps, mapDispatchToProps)(PickStudyDateContainer)

export default withHeader(ConnectedPickStudyDateContainer);