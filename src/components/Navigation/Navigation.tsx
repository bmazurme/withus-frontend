import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../../user/userSlice';
import { Urls } from '../../utils/constants';
import Link from '../Link/Link';
import { INavigationProps } from '../../interfaces/interfaces';
import ProfileButton from '../ProfileButton/ProfileButton';

function Navigation({ isOpen, handlerClick }: INavigationProps) {
  const { user } = useSelector(selectData);
  const { name } = user;
  return (
    <>
      <div className={`navigation
        ${isOpen
        ? 'navigation_opened'
        : ''}`}
      >
        <ul className={`navigation__links ${isOpen ? 'navigation__links_opened' : ''}`}>
          <Link
            className="navigation__link navigation__link_home"
            to={Urls.MAIN.INDEX}
            label="Main"
            onHandleClick={null}
          />
          {!name
            ? (
              <>
                <Link
                  className="navigation__signup"
                  to={Urls.SIGN.UP}
                  label="Signup"
                  onHandleClick={null}
                />
                <Link
                  className="navigation__signin"
                  to={Urls.SIGN.IN}
                  label="Signin"
                  onHandleClick={null}
                />
              </>
            )
            : null}
          {
            name
              ? (
                <ProfileButton
                  isOpen
                />
                // <Link
                //   className="profile-button"
                //   to={Urls.PROFILE.INDEX}
                //   label={name}
                //   onHandleClick={null}
                // />
              )
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
