import React, { useState } from 'react';
import SearchUsers from './Search';
import { setUsers, setSearch } from '../../store/users/actions';
import { connect } from 'react-redux';
import { get } from 'js-cookie';
import { setIsLoading } from '../../store/actions';
import { string, func } from 'prop-types';
import { getRequest } from '../../assets/services/request.service';

const SearchContainer = ({searchStr, sortBy, setSearch, setUsers, setIsLoading }) => {
   const onSuccess = data => {
      setUsers(data);
      setIsLoading(false);
   }
   const onError = error => {
      console.log(error)
   }
   const onSearch = (e) => {
      e.preventDefault();
      if (!!searchStr) {
         setIsLoading(true);
         const token = get('token');
         getRequest(`admin/search/${searchStr}/${sortBy ? sortBy : 'empty'}`, onSuccess, onError, token)
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