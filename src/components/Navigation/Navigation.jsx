import React, { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import {
  PROFILE_URL,
  MAIN_URL,
  SIGNIN_URL,
  SIGNUP_URL,
} from '../../utils/constants';
import Link from '../Link/Link';

function Navigation(props) {
  const { isOpen, handlerClick } = props;
  const currentUser = useContext(CurrentUserContext);
  const { name } = currentUser;
  return (
    <>
      <div className={`navigation 
        ${isOpen
        ? 'navigation_opened'
        : ''}`}
      >
        <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
          <Link className="navigation__link navigation__link_home" to={MAIN_URL} label="Main" />
          {!name
            ? (
              <>
                <Link className="navigation__link" to={SIGNIN_URL} label="Signin" />
                <Link className="navigation__link" to={SIGNUP_URL} label="Signup" />
              </>
            )
            : null}
          {
            name
              ? <Link className="navigation__link" to={PROFILE_URL} label={name} />
              : null
          }
        </ul>
      </div>

      <button
        onClick={handlerClick}
        type="button"
        className={`button navigation__button
        ${isOpen ? 'navigation__button_open' : ''}`}
      >
        <span className="label_off">toggle</span>
      </button>
    </>
  );
}

export default Navigation;
