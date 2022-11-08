/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';
import oauth from '../../utils/oauthApi';

function HeaderMenu() {
  const [value, setValue] = React.useState('');
  const onClick = () => { console.log(value); oauth.getInfo({ code: '123', token: {} }); };
  const onChange = (e: any) => { setValue(e.target.value); };

  return (
    <div className="headermenu">
      <NavLink className="headermenu__link" to={Urls.MAIN.ABOUT}>About</NavLink>
      <NavLink className="headermenu__link" to={Urls.MAIN.PRIVATE}>Privace</NavLink>
      <input onChange={onChange} value={value} />
      <div onClick={onClick}>123</div>
    </div>
  );
}

export default HeaderMenu;
