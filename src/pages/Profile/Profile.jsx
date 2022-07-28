import React, { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Logo from '../../components/Logo/Logo';
import Field from '../../components/Field/Field';
import Link from '../../components/Link/Link';
import { MAIN_URL, PROFILE_EDIT_URL, PROFILE_EDIT_PASS_URL } from '../../utils/constants';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const { handleLogOut } = props;
  return (
    <section className="profile">
      <Logo />
      <h2 className="profile__title">
        {`Привет, ${name} !`}
      </h2>
      <Field label="Name" value={name} />
      <Field label="E-mail" value={email} />
      <ul className="profile__links">
        <Link
          className="profile__link"
          to={PROFILE_EDIT_URL}
          label="Редактировать профиль"
        />
        <Link
          className="profile__link"
          to={PROFILE_EDIT_PASS_URL}
          label="Редактировать пароль"
        />
        <Link
          className="profile__link profile__link_red"
          to={MAIN_URL}
          onHandleClick={handleLogOut}
          label="Выйти из аккаунта"
        />
      </ul>
    </section>
  );
}

export default Profile;
