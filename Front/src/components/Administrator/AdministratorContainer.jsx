import React, { useEffect } from 'react';
import { get } from 'js-cookie';
import { connect } from 'react-redux';

import Administrator from './Administrator';
import { setUsers } from '../../store/users/actions';
import { setFetching } from '../../store/actions';
import withHeader from '../withHeader';
import { Get } from '../../assets/services/request.service';

const AdministratorContainer = ({ setUsers, setFetching }) => {
  useEffect(() => {
    setFetching(true);
    Get(
      'admin',
      data => {
        setUsers(data);
        setFetching(false);
      },
      error => {
        console.log(error)
      },
      get('token'));
  }, []);
  
  return <Administrator />
};

const ConnectedAdminContainer = connect(null, { setUsers, setFetching })(AdministratorContainer)

export default withHeader(ConnectedAdminContainer);