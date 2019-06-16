import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Administrator from './Administrator';
import { connect } from 'react-redux'
import { setUsers } from '../../store/users/actions';
import { setLoading } from '../../store/actions';
import withHeader from '../withHeader';
import { Get } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';

const AdministratorContainer = ({ setUsers, setLoading }) => {
   const onSuccess = (data) => {
      setUsers(data);
      setLoading(false);
   }
   const onError = (error) => {
      console.log(error)
   }
   useEffect(() => {
      setLoading(true);
      const token = Cookies.getJSON('token');
      Get(api + 'admin', onSuccess, onError, !!token ? token : null);
   }, []);
   
   return <Administrator />
};

const ConnectedAdminContainer = connect(null, { setUsers, setLoading })(AdministratorContainer)

export default withHeader(ConnectedAdminContainer);