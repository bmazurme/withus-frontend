import React from 'react';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';

function HeaderMenu() {
  return (
    <div className="headermenu">
      <NavLink className="headermenu__link" to={Urls.MAIN.ABOUT}>About</NavLink>
      <NavLink className="headermenu__link" to={Urls.MAIN.PRIVATE}>Privace</NavLink>
    </div>
  );
}

export default HeaderMenu;
