import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Page from './_reusable/Page';
import { user_type } from '../Prop-types';
import ConfirmationControl from './ConfirmationControl';
import NotFound from './Error/NotFound';
import { redirectCheck } from '../assets/constants/functions/redirectCheck';
import { rootRoute, signUpRoute, adminRoute, userRoute } from '../assets/constants/data/routesParams';

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
               component={() => redirectCheck(JSON.stringify(user) === '{}', rootRoute)}
            />
            <Route 
               path="/sign-up" 
               component={() => redirectCheck(JSON.stringify(user) === '{}', signUpRoute)}
            />
            <Route 
               path="/admin" 
               component={() => redirectCheck(JSON.stringify(user) !== '{}' && user.role === 'admin', adminRoute)} 
            />
            <Route 
               path="/user" 
               component={() => redirectCheck(JSON.stringify(user) !== '{}', userRoute)} 
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