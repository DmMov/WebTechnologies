import React, { useState } from 'react';
import ChosenDateMessage from '../Message/ChosenDateMessage';
import PickStudyDate from './PickStudyDate';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { changeStudyDate } from '../../store/user/actions';
import { setFetching } from '../../store/actions';
import UnconfirmedEmailMessage from '../Message/UnconfirmedEmailMessage';
import withHeader from '../withHeader';
import { disabledDate } from '../../assets/utils/disabledDate';
import { Put } from '../../assets/services/request.service';
import { PickStudyDateContainerPropTypes } from '../../assets/prop-types/PickStudyDateContainer.prop-types';
import { api } from '../../assets/constants/api';

const PickStudyDateContainer = ({ user, changeStudyDate, setFetching }) => {
   const [date, setDate] = useState('');
   const { studyDate, emailConfirmed } = user;
   let localUser = user;
   const onSuccess = data => {
      setFetching(false);
      localUser.studyDate = data;
      Cookies.set('user', localUser, { expires: 7 });
      changeStudyDate(data);
   }
   const onError = error => {
      console.log(error);
   }
   const onConfirmDate = () => {
      setFetching(true);
      Put(`${api}user/set-study-data/${localUser.id}/${date}`, {}, onSuccess, onError, localUser.token);
   }
   const onDateChange = (date, dateStr) => setDate(dateStr);

   if (!emailConfirmed) {
      return <UnconfirmedEmailMessage />
   }

   if(!!studyDate) {
      return <ChosenDateMessage studyDate={studyDate} />
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

PickStudyDateContainer.propTypes = PickStudyDateContainerPropTypes;

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { 
   changeStudyDate,
   setFetching 
};

const ConnectedPickStudyDateContainer = connect(mapStateToProps, mapDispatchToProps)(PickStudyDateContainer)

export default withHeader(ConnectedPickStudyDateContainer);