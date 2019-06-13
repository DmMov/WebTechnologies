import React, { useEffect } from 'react';
import Administrator from './Administrator';
import { connect } from 'react-redux'
import { setUsers } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import Cookies from 'js-cookie';
import withHeader from '../withHeader';
import { Get } from '../../assets/services/request.service';
import { AdministratorContainerPropTypes } from '../../assets/prop-types/AdministratorContainer.prop-types';
import { api } from '../../assets/constants/api';

const AdministratorContainer = ({ setUsers, setIsLoading }) => {
   const onSuccess = (data) => {
      setUsers(data);
      setIsLoading(false);
   }
   const onError = (error) => {
      console.log(error)
   }
   useEffect(() => {
      setIsLoading(true);
      const token = Cookies.getJSON('token');
      Get(api + 'admin', onSuccess, onError, !!token ? token : null);
   }, []);
   
   return <Administrator />
};

AdministratorContainer.propTypes = AdministratorContainerPropTypes;

const ConnectedAdminContainer = connect(null, { setUsers, setIsLoading })(AdministratorContainer)

export default withHeader(ConnectedAdminContainer);