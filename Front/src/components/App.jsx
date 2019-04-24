import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Page from './_reusable/Page';
import SignUpContainer from './SignUp/SignUpContainer';
import SignInContainer from './SignIn/SignInContainer';
import { user_type } from '../Prop-types';
import ConfirmationControl from './ConfirmationControl';
import NotFound from './Error/NotFound';
import AdminContainer from './Admin/AdminContainer';
import PickStudyDateContainer from './PickStudyDate/PickStudyDateContainer';

const routeRender = (condition, { Component, pageClass, from, to }) => {
   if(condition) {
      return (
         <Page pageClass={pageClass}>
            <Component />
         </Page>
      )
   }

   return <Redirect from={from} to={to} />
}

const rootRoute = {
   Component: SignInContainer,
   pageClass: 'sign-in-page', 
   from : '/sign-in', 
   to:'/admin'
}

const signUpRoute = {
   Component: SignUpContainer,
   pageClass: 'sign-up-page', 
   from : '/sign-up', 
   to:'/admin'
}

const adminRoute = {
   Component: AdminContainer,
   pageClass: 'admin-page', 
   from : '/admin', 
   to:'/user'
}

const userRoute = {
   Component: PickStudyDateContainer,
   pageClass: 'user-page', 
   from : '/user', 
   to:'/'
}
const App = ({ user }) => (
   <Router>
      <>
         <Switch>
            <Route 
               exact 
               path="/" 
               component={() => <Redirect to="/sign-in" />}
            />
            <Route 
               path="/sign-in" 
               component={() => routeRender(JSON.stringify(user) === '{}', rootRoute)}
            />
            <Route 
               path="/sign-up" 
               component={() => routeRender(JSON.stringify(user) === '{}', signUpRoute)}
            />
            <Route 
               path="/admin" 
               component={() => routeRender(JSON.stringify(user) !== '{}' && user.role === 'admin', adminRoute)} 
            />
            <Route 
               path="/user" 
               component={() => routeRender(JSON.stringify(user) !== '{}', userRoute)} 
            />
            <Route 
               path="/confirm-email/:userId/:confCode"
               component={() => (
                  <Page pageClass="confirm-email-page">
                     <ConfirmationControl />
                  </Page>
               )}
            />
            <Route 
               path="/404"
               component={() => (
                  <Page pageClass="not-found-page" >
                     <NotFound />
                  </Page>
                  )
               } 
            />
            <Redirect to="/404" />
         </Switch>
      </>
   </Router>
);

App.propTypes = {
   user: user_type
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(App);