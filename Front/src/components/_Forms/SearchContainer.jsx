import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'js-cookie';

import Search from './Search';
import { setUsers } from '../../store/users/actions';
import { setFetching, setSearch } from '../../store/actions';
import { Get } from '../../assets/services/request.service';

const SearchContainer = () => {
  const { search, sort } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!!search) {
      dispatch(setFetching(true));
      Get(
        `admin/search/${search}/${sort ? sort : 'empty'}`, 
        data => {
          dispatch(setUsers(data));
          dispatch(setFetching(false));
        }, 
        error => console.error(error), 
        get('token')
      );
    }
  }

  const change = ({ target: { value } }) => dispatch(setSearch(value));
  
  return <Search value={search} change={change} onSubmit={onSubmit}/>
};

export default SearchContainer;