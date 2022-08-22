import React from 'react';
import Link from '../Link/Link';
import { Urls } from '../../utils/constants';

function Menu(props) {
  const { handleLogOut } = props;
  const links = [
    {
      className: 'profile__link',
      to: Urls.PROFILE_EDIT,
      label: 'Edit profile',
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      handler: () => {},
    },
    {
      className: 'profile__link',
      to: Urls.PROFILE_EDIT_PASS,
      label: 'Edit password',
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      handler: () => {},
    },
    {
      className: 'profile__link profile__link_red',
      to: Urls.MAIN,
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
