import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Field from '../../components/Field/Field';
import Menu from '../../components/Menu/Menu';
import { selectData } from '../../user/userSlice';
import { IProfileProps } from '../../interfaces/interfaces';

function Profile({ handleLogOut }: IProfileProps) {
  const { user } = useSelector(selectData);
  const { name, email } = user;

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
