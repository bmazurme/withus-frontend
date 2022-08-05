import React, { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../../components/Header/Header';
import Field from '../../components/Field/Field';
import Menu from '../../components/Menu/Menu';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const { handleLogOut } = props;
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">
          {`Hi, ${name} !`}
        </h2>
        <Field label="Name" value={name} />
        <Field label="E-mail" value={email} />
        <Menu handleLogOut={handleLogOut} />
      </section>
    </>
  );
}

export default Profile;
