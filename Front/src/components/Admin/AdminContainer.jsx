import React, { useEffect } from 'react';
import Admin from './Admin';
import Axios from 'axios';
import { connect } from 'react-redux'
import { domain } from '../../domain';
import { setUsers } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import Cookies from 'js-cookie';
import withHeader from '../withHeader';
import { user_list_type } from '../../Prop-types';
import { func, bool } from 'prop-types';

const AdminContainer = ({ users, setUsers, isLoading, setIsLoading }) => {
   useEffect(() => {
      setIsLoading(true);
      const token = Cookies.getJSON('token');
      Axios.get(`${domain}admin`, { headers: { Authorization: "Bearer " + token } })
      .then(({ data }) => {
         setUsers(data);
         setIsLoading(false);
      })
      .catch(error => !!error.response && console.log(error.response))
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