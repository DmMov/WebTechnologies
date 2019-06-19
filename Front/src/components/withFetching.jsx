import React from 'react';
import { useSelector } from 'react-redux'
import Fetching from './_General/Fetching';

const withFetching = Component => props => {
  const fetching = useSelector(({ common: { fetching } }) => fetching)
  return (
    <Fetching fetching={fetching} >
      <Component {...props} />
    </Fetching>
  );
}

export default withFetching;