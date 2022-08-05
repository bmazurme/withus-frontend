import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Logo from '../../components/Logo/Logo';
import Link from '../../components/Link/Link';
import Inbox from '../../components/Inbox/Inbox';
import Button from '../../components/Button/Button';
import useFormWithValidation from '../../utils/validator.ts';

function ProfilePass(props) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const { handleUpdatePassword } = props;

  useEffect(() => {
    values.password = currentUser.password;
    values.newPassword = currentUser.newPassword;
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdatePassword({
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
          type="submit"
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
          to="/profile"
          label="Назад"
        />
      </ul>
    </section>
  );
}

export default ProfilePass;
