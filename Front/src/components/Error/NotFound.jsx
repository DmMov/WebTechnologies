import React from 'react';
import Error from './Error';
import Link from '../_General/Link';

const NotFound = () => {
   document.title = '404 | Not found';

   return [
      <Error 
         key="1"
         errorClass="not-found-error"
         code={404}
         title="page not found"
         message={`We couldn't find this page`}
      />,
      <Link
         key="2"
         active={false} 
         to="/" 
         label="go home" 
      />
   ];
}

export default NotFound;