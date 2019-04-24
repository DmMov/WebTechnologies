import React from 'react';
import { connect } from 'react-redux'
import { Spin } from 'antd';

const withSpin = Component => {
   const Container = props => (
      <Spin spinning={props.isLoading} >
         <Component {...props} />
      </Spin>
   );

   const mapStateToProps = ({ general: { isLoading } }) => ({ isLoading });

   return connect(mapStateToProps)(Container);
};

export default withSpin;