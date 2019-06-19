import React from 'react';
import Sort from './Sort';
import { connect } from 'react-redux'
import { setUsers, setSort } from '../../store/users/actions';
import { setFetching } from '../../store/actions';
import { get } from 'js-cookie';
import { Get } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';

const SortContainer = ({ searchStr, setSort, setUsers, setFetching }) => {
   const onSuccess = data => {
      setSort(value);
      setUsers(data);
      setFetching(false);
   }
   const onError = error => {
      console.log(error);
   }
   const onChange = value => {
      setFetching(true);
      const token = get('token');
      Get(`${api}admin/sort/${value}/${searchStr ? searchStr : 'empty'}`, onSuccess, onError, token);
   }

   return <Sort onChange={onChange} />
};

const mapStateToProps = ({ common: { search }}) => ({ search });

const mapDispatchToProps = { setUsers, setSort, setFetching };

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);