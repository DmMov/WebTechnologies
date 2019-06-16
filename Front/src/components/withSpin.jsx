import React from 'react';
import { useSelector } from 'react-redux'
import { Spin } from 'antd';

const withSpin = Component => props => {
  const loading = useSelector(({ common: { loading} }) => loading)
  return (
    <Spin spinning={loading} >
      <Component {...props} />
    </Spin>
  );
}

export default withSpin;