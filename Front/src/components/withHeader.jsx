import React from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import Cookies from 'js-cookie';
import { removeUserData } from '../store/user/actions';

const withHeader = Component => {
   const Container = props => {
      const { removeUserData } = props;
      const { name, lastName } = props.user;
      const fullName = `${name} ${lastName}`;

      document.title = `Education | ${fullName}`;

      const onSignOut = () => {
         Cookies.remove('user');
         Cookies.remove('token');
         removeUserData();
      }

      return (
         <>
            <Header 
               {...props} 
               fullName={fullName}
               onSignOut={onSignOut} 
            />
            <Component />
         </>
      );
   }

   const mapStateToProps = ({ user }) => ({
      user
   });

   const mapDispatchToProps = {
      removeUserData
   }

   return connect(mapStateToProps, mapDispatchToProps)(Container);
};

export default withHeader;