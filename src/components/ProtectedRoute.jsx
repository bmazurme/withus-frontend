import React from 'react';
import { Navigate } from 'react-router-dom';
import { Urls } from '../utils/constants';

function ProtectedRoute({ loggedIn, children }) {
  if (!loggedIn) {
    return (
      <Navigate
        to={Urls.SIGNIN}
        replace
      />
    );
  }
  return children;
}

export default ProtectedRoute;
