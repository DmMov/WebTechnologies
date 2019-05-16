import React, { useEffect } from 'react';
import Admin from './Admin';
import { connect } from 'react-redux'
import { setUsers } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import Cookies from 'js-cookie';
import withHeader from '../withHeader';
import { user_list_type } from '../../Prop-types';
import { func, bool } from 'prop-types';
import { getRequest } from '../../assets/services/request.service';

const AdminContainer = ({ users, setUsers, isLoading, setIsLoading }) => {
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
      getRequest('admin', onSuccess, onError, !!token ? token : null);
   }, []);
   
   return (
      <Admin 
         users={users} 
         isLoading={isLoading}
      />
   );
};

AdminContainer.propTypes = {
   users: user_list_type,
   setUsers: func.isRequired,
   isLoading: bool.isRequired,
   setIsLoading: func.isRequired 
}

const mapStateToProps = ({ users: { list }, general: { isLoading } }) => ({ 
   users: list, 
   isLoading 
});

const mapDispatchToProps = { 
   setUsers, 
   setIsLoading 
};

const ConnectedAdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminContainer)

export default withHeader(ConnectedAdminContainer);