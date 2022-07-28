import React, { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { PROFILE_URL } from '../../utils/constants';
import Link from '../Link/Link';

function Navigation(props) {
  const { isOpen } = props;
  const currentUser = useContext(CurrentUserContext);
  const { name } = currentUser;
  return (
    <div className={`navigation 
      ${isOpen
      ? 'navigation_opened'
      : ''}`}
    >
      <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
        <Link className="navigation__link navigation__link_home" to="/" label="Main" />
        <Link className="navigation__link" to="/signin" label="Signin" />
        <Link className="navigation__link" to="/signup" label="Signup" />
        {
          name
            ? <Link className="navigation__link" to={PROFILE_URL} label={name} />
            : null
        }
      </ul>
    </div>
  );
}

export default Navigation;
