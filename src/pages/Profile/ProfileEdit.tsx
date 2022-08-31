/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../../user/userSlice';
import Logo from '../../components/Logo/Logo';
import Inbox from '../../components/Inbox/Inbox';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import useFormWithValidation from '../../utils/validator';
import { EMAIL_REGEXP, Urls } from '../../utils/constants';
import { IValid, IProfileEditProps } from '../../interfaces/interfaces';

function ProfileEdit({ handleUpdateUser }: IProfileEditProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const { user } = useSelector(selectData);
  const { name, email } = user;

  useEffect(() => {
    values.name = name;
    values.email = email;
  }, []);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handleUpdateUser({
      email: values.email,
      name: values.name,
    });
  };

  return (
    <section className="profile">
      <Logo />
      <h2 className="profile__title">
        Edit profile
      </h2>
      <form onSubmit={handleSubmit}>
        <Inbox
          label="Name"
          name="name"
          type="text"
          id="name-input"
          autoComplete="off"
          onChange={handleChange}
          errors={errors}
          value={values.name || name}
          minLength={4}
          maxLength={20}
          required
          pattern={''}
          placeholder={''}
        />
        <Inbox
          pattern={EMAIL_REGEXP}
          label="E-mail"
          name="email"
          type="text"
          id="email-input"
          autoComplete="off"
          onChange={handleChange}
          errors={errors}
          value={values.email || email}
          required
          placeholder={''}
          minLength={5}
          maxLength={30}
        />
        <Button
          typeButton="submit"
          isValid={
            (isValid && values.name !== name)
            || (isValid && values.email !== email)
          }
          className="button_submit"
          value="Сохранить"
        />
      </form>
      <ul className="profile__links">
        <Link
          className="profile__link"
          to={Urls.PROFILE.INDEX}
          label="Back"
          onHandleClick={null}
        />
      </ul>
    </section>
  );
}

export default ProfileEdit;
