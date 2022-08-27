import React from 'react';
import { Navigate } from 'react-router-dom';
import { Urls } from '../utils/constants';

interface IProps {
  loggedIn: boolean,
  children: any,
}

function ProtectedRoute({ loggedIn, children }: IProps) {
  if (!loggedIn) {
    return (
      <Navigate
        to={Urls.SIGN.IN}
        replace
      />
    );
  }
  return children;
}

export default ProtectedRoute;
