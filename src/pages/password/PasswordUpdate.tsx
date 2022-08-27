/* eslint-disable react/jsx-curly-brace-presence */
import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Logo from '../../components/Logo/Logo';
import Link from '../../components/Link/Link';
import Inbox from '../../components/Inbox/Inbox';
import Button from '../../components/Button/Button';
import useFormWithValidation from '../../utils/validator';
import { Urls } from '../../utils/constants';
import { IValid, IPasswordProps } from '../../interfaces/interfaces';

function PasswordUpdate({ handler }: IPasswordProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const currentUser: Record<string, string> = useContext(CurrentUserContext);
  const { name, email } = currentUser;

  useEffect(() => {
    values.password = currentUser.password;
    values.newPassword = currentUser.newPassword;
  }, []);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handler({
      password: values.password,
      newPassword: values.newPassword,
      email,
    });
  };

  return (
    <section className="profile">
      <Logo />
      <h2 className="profile__title">
        Edit password
      </h2>
      <form onSubmit={handleSubmit}>
        <Inbox
          label="Old password"
          name="password"
          type="password"
          id="password-input"
          autoComplete="off"
          onChange={handleChange}
          errors={errors}
          value={values.password || ''}
          minLength={6}
          maxLength={20}
          required
          pattern={''}
          placeholder={''}
        />

        <Inbox
          label="New password"
          name="newPassword"
          type="password"
          id="newPassword-input"
          autoComplete="off"
          onChange={handleChange}
          errors={errors}
          value={values.newPassword || ''}
          minLength={6}
          maxLength={20}
          required
          pattern={''}
          placeholder={''}
        />

        {/* <Inbox
          label="Confirm password"
          name="conPassword"
          type="password"
          id="name-input"
          autoComplete="off"
          onChange={handleChange}
          errors={errors}
          value={values.newPassword || ''}
          minLength={6}
          maxLength={20}
          required
        /> */}

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
          label="Назад"
          onHandleClick={null}
        />
      </ul>
    </section>
  );
}

export default PasswordUpdate;
