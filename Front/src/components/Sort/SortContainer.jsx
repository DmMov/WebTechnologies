import React from 'react';
import Sort from './Sort';
import { connect } from 'react-redux'
import { setUsers, setSort } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import { get } from 'js-cookie';
import { Get } from '../../assets/services/request.service';
import { SortContainerPropTypes } from '../../assets/prop-types/SortContainer.prop-types';
import { api } from '../../assets/constants/api';

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
      Get(`${api}admin/sort/${value}/${searchStr ? searchStr : 'empty'}`, onSuccess, onError, token);
   }

   return <Sort onChange={onChange} />
};

SortContainer.propTypes = SortContainerPropTypes;

const mapStateToProps = ({ users: { searchStr }}) => ({ searchStr });

const mapDispatchToProps = { setUsers, setSort, setIsLoading };

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);