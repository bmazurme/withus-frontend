import React from 'react';
import { NavLink } from 'react-router-dom';
import { Urls } from '../../utils/constants';

interface IProps {
  isOpen: boolean,
}

function ProfileButton({ isOpen }: IProps) {
  return (
    <NavLink
      className={`profile-button
        ${isOpen
        ? 'profile-button_opened'
        : ''}
      `}
      to={Urls.PROFILE.INDEX}
    >
      <p className="profile-button__label">Аккаунт</p>
      <div className="profile-button__icon" />
    </NavLink>
  );
}

export default ProfileButton;
