import React, { useState } from 'react';
import SearchUsers from './Search';
import Axios from 'axios';
import { domain } from '../../domain';
import { setUsers, setSearch } from '../../store/users/actions';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { setIsLoading } from '../../store/actions';
import { string, func } from 'prop-types';

const SearchContainer = ({searchStr, sortBy, setSearch, setUsers, setIsLoading }) => {
   const onSearch = (e) => {
      e.preventDefault();
      if (!!searchStr) {
         setIsLoading(true);
         const token = Cookies.getJSON('token');
         Axios.get(`${domain}admin/search/${searchStr}/${sortBy ? sortBy : 'empty'}`, { headers: { Authorization: "Bearer " + token }})
         .then(({ data }) => {
            setUsers(data);
            setIsLoading(false);
         })
         .catch(error => !!error.response && console.log(error.response));
      }
   }
   
   return (
      <SearchUsers 
         value={searchStr}
         setValue={({ target }) => setSearch(target.value)}
         onSubmit={onSearch}
      />
   );
};

SearchContainer.propTypes = {
   searchStr: string.isRequired,
   sortBy: string,
   setSearch: func.isRequired,
   setUsers: func.isRequired,
   setIsLoading: func.isRequired
}

const mapStateToProps = ({ general: { isLoading }, users: { searchStr, sortBy } }) => ({ 
   isLoading, 
   searchStr, 
   sortBy 
});

const mapDispatchToProps = { 
   setUsers, 
   setIsLoading, 
   setSearch 
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);