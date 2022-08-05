import React from 'react';
import { Navigate } from 'react-router-dom';
import { SIGNIN_URL } from '../utils/constants';

function ProtectedRoute({ loggedIn, children }) {
  if (!loggedIn) {
    return (
      <Navigate
        to={SIGNIN_URL}
        replace
      />
    );
  }
  return children;
}

export default ProtectedRoute;
