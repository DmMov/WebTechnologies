import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { redirectCheck } from '../assets/utils/redirectCheck';
import { rootRoute, signUpRoute, adminRoute, userRoute } from '../assets/data/routesParams';
import { AppPropTypes } from '../assets/prop-types/App.prop-types';
import { loadmang } from '../assets/utils/loadmang';

const ConfirmationControl = loadmang(() => import('./ConfirmationControl'));
const NotFound = loadmang(() => import('./Error/NotFound'));
const Page = loadmang(() => import('./_General/Page'));
const Loading = loadmang(() => import('./_General/Loading'));

const App = ({ user, loading }) =>
  <Router>
    <>
      { loading && <Loading /> }
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
   
App.propTypes = AppPropTypes;

const mapStateToProps = ({ user, common: { loading } }) => ({ user, loading });

export default connect(mapStateToProps)(App);