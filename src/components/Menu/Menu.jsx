import React from 'react';
import Link from '../Link/Link';
import { MAIN_URL, PROFILE_EDIT_URL, PROFILE_EDIT_PASS_URL } from '../../utils/constants';

function Menu(props) {
  const { handleLogOut } = props;
  const links = [
    {
      className: 'profile__link',
      to: PROFILE_EDIT_URL,
      label: 'Edit profile',
      handler: () => {},
    },
    {
      className: 'profile__link',
      to: PROFILE_EDIT_PASS_URL,
      label: 'Edit password',
      handler: () => {},
    },
    {
      className: 'profile__link profile__link_red',
      to: MAIN_URL,
      label: 'Sign out',
      handler: handleLogOut,
    },
  ];

  return (
    <ul className="profile__links">
      {links.map((link, index) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={link.className}
          to={link.to}
          label={link.label}
          onHandleClick={link.handler}
        />
      ))}
    </ul>
  );
}

export default Menu;
