import React from 'react';
import { connect } from 'react-redux'
import { get } from 'js-cookie';

import Sort from './Sort';
import { setUsers } from '../../store/users/actions';
import { setFetching, setSort } from '../../store/actions';
import { Get } from '../../assets/services/request.service';

const SortContainer = ({ search, setSort, setUsers, setFetching }) => {
   const onChange = value => {
      setFetching(true);
      Get(
         `admin/sort/${value}/${search ? search : 'empty'}`, 
         data => {
            setSort(value);
            setUsers(data);
            setFetching(false);
         }, 
         error => {
            console.log(error);
            setFetching(false);
         }, 
         get('token')
      );
   }

   return <Sort onChange={onChange} />
};

const mapStateToProps = ({ common: { search }}) => ({ search });

const mapDispatchToProps = { setUsers, setSort, setFetching };

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);