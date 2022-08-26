import React from 'react';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';

function Logo() {
  return (
    <NavLink className="logo" to={Urls.MAIN}>
      <div className="logo__icon" />
    </NavLink>
  );
}

export default Logo;
