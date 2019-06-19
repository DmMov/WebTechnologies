import React from 'react';
import cx from 'classnames';

const Fetching = ({ children, fetching }) =>
  <div className={cx({ fetching })}>
    { fetching && 
      <p className="fetching-text">
        <span className="text">
          Fetching...
        </span>
      </p>
    }
    { children }
  </div>

export default Fetching;