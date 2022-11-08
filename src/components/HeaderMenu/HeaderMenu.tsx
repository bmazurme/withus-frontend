/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
