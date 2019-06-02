import React, { useEffect } from 'react';
import Admin from './Admin';
import { connect } from 'react-redux'
import { setUsers } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import Cookies from 'js-cookie';
import withHeader from '../withHeader';
import { Get } from '../../assets/services/request.service';
import { AdminContainerPropTypes } from '../../assets/prop-types/AdminContainer.prop-types';
import { api } from '../../assets/constants/api';

const AdminContainer = ({ setUsers, setIsLoading }) => {
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
   
   return <Admin />
};

AdminContainer.propTypes = AdminContainerPropTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = { 
   setUsers, 
   setIsLoading 
};

const ConnectedAdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminContainer)

export default withHeader(ConnectedAdminContainer);