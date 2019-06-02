import React from 'react';
import SearchUsers from './Search';
import { setUsers, setSearch } from '../../store/users/actions';
import { connect } from 'react-redux';
import { get } from 'js-cookie';
import { setIsLoading } from '../../store/actions';
import { Get } from '../../assets/services/request.service';
import { SearchContainerPropTypes } from '../../assets/prop-types/SearchContainer.prop-types';
import { api } from '../../assets/constants/api';


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
         Get(`${api}admin/search/${searchStr}/${sortBy ? sortBy : 'empty'}`, onSuccess, onError, token)
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

SearchContainer.propTypes = SearchContainerPropTypes;

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