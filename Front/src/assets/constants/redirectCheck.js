import React from 'react';
import Page from '../../components/_reusable/Page';
import { Redirect } from 'react-router-dom';
export const redirectCheck = (condition, { Component, pageClass, from, to }) => {
   if(condition) {
      return (
         <Page pageClass={pageClass}>
            <Component />
         </Page>
      )
   }

   return <Redirect from={from} to={to} />
}