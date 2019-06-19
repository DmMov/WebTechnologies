import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Administrator from './Administrator';
import { connect } from 'react-redux'
import { setUsers } from '../../store/users/actions';
import { setFetching } from '../../store/actions';
import withHeader from '../withHeader';
import { Get } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';

const AdministratorContainer = ({ setUsers, setFetching }) => {
   const onSuccess = (data) => {
      setUsers(data);
      setFetching(false);
   }
   const onError = (error) => {
      console.log(error)
   }
   useEffect(() => {
      setFetching(true);
      const token = Cookies.getJSON('token');
      Get(api + 'admin', onSuccess, onError, !!token ? token : null);
   }, []);
   
   return <Administrator />
};

const ConnectedAdminContainer = connect(null, { setUsers, setFetching })(AdministratorContainer)

export default withHeader(ConnectedAdminContainer);