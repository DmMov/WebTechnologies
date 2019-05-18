import React from 'react';
import Sort from './Sort';
import { connect } from 'react-redux'
import { setUsers, setSort } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import { get } from 'js-cookie';
import { string, func } from 'prop-types';
import { getRequest } from '../../assets/services/request.service';

const SortContainer = ({ searchStr, setSort, setUsers, setIsLoading }) => {
   const onSuccess = data => {
      setSort(value);
      setUsers(data);
      setIsLoading(false);
   }
   const onError = error => {
      console.log(error);
   }
   const onChange = value => {
      setIsLoading(true);
      const token = get('token');
      getRequest(`admin/sort/${value}/${searchStr ? searchStr : 'empty'}`, onSuccess, onError, token);
   }

   return <Sort onChange={onChange} />
};

SortContainer.propTypes = {
   searchStr: string,
   setSort: func.isRequired,
   setUsers: func.isRequired,
   setIsLoading: func.isRequired
}

const mapStateToProps = ({ users: { searchStr }}) => ({ searchStr });

const mapDispatchToProps = { setUsers, setSort, setIsLoading };

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);