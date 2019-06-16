import React from 'react';
import Sort from './Sort';
import { connect } from 'react-redux'
import { setUsers, setSort } from '../../store/users/actions';
import { setLoading } from '../../store/actions';
import { get } from 'js-cookie';
import { Get } from '../../assets/services/request.service';
import { api } from '../../assets/constants/api';

const SortContainer = ({ searchStr, setSort, setUsers, setLoading }) => {
   const onSuccess = data => {
      setSort(value);
      setUsers(data);
      setLoading(false);
   }
   const onError = error => {
      console.log(error);
   }
   const onChange = value => {
      setIsLoading(true);
      const token = get('token');
      Get(`${api}admin/sort/${value}/${searchStr ? searchStr : 'empty'}`, onSuccess, onError, token);
   }

   return <Sort onChange={onChange} />
};

const mapStateToProps = ({ common: { search }}) => ({ search });

const mapDispatchToProps = { setUsers, setSort, setLoading };

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);