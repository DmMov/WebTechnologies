import React from 'react';
import Sort from './Sort';
import Axios from 'axios';
import { domain } from '../../domain';
import { connect } from 'react-redux'
import { setUsers, setSort } from '../../store/users/actions';
import { setIsLoading } from '../../store/actions';
import Cookies from 'js-cookie';
import { string, func } from 'prop-types';

const SortContainer = ({ searchStr, setSort, setUsers, setIsLoading }) => {
   const onChange = value => {
      setIsLoading(true);
      const token = Cookies.getJSON('token');
      Axios.get(`${domain}admin/sort/${value}/${searchStr ? searchStr : 'empty'}`, { headers: { Authorization: "Bearer " + token } })
      .then(({ data }) => {
         setSort(value);
         setUsers(data);
         setIsLoading(false);
      })
      .catch(error => !!error.response && console.log(error.response));
   }

   return (
      <Sort 
         onChange={onChange} 
      />
   );
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