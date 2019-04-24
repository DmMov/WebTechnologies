import React, { useEffect } from 'react';
import Admin from './Admin';
import Axios from 'axios';
import { connect } from 'react-redux'
import { domain } from '../../domain';
import { setUsers } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import Cookies from 'js-cookie';
import { Icon } from 'antd';
import withHeader from '../withHeader';
import { user_list_type } from '../../Prop-types';
import { func, bool } from 'prop-types';

const columns = [
   {
      title: 'ID',
      dataIndex: 'index',
      key: 'index',
   }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
   }, {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
   }, {
      title: 'Age',
      key: 'age',
      dataIndex: 'age',
   }, {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
   }, {
      title: 'Registered Date',
      key: 'registeredDate',
      dataIndex: 'registeredDate',
   }, {
      title: 'Study Date',
      key: 'studyDate',
      dataIndex: 'studyDate',
      render: text => (
         <span>
         <Icon type="flag" style={{ color: !!text ? '#1890ff' : '#FF0134'}} /> 
         <span className="bold capitalize"> {!!text ? text : 'not chosen'}</span>
         </span>
      )
   }
];

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
         columns={columns}
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