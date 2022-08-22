import React, { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Urls } from '../../utils/constants';
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
          <Link className="navigation__link navigation__link_home" to={Urls.MAIN} label="Main" />
          {!name
            ? (
              <>
                <Link className="navigation__link" to={Urls.SIGNIN} label="Signin" />
                <Link className="navigation__link" to={Urls.SIGNUP} label="Signup" />
              </>
            )
            : null}
          {
            name
              ? <Link className="navigation__link" to={Urls.PROFILE} label={name} />
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
