import React from 'react';
import Link from '../Link/Link';
import { links } from './links';
import { IMenu } from '../../interfaces/interfaces';
import { Urls } from '../../utils/constants';

function Menu({ handleLogOut }: IMenu) {
  return (
    <ul className="profile__links">
      {links.map((link, index) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={link.className}
          to={link.to}
          label={link.label}
          onHandleClick={link.to === Urls.MAIN.INDEX ? handleLogOut! : link.handler!}
        />
      ))}
    </ul>
  );
}

export default Menu;
