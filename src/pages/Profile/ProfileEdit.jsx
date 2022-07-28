import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Logo from '../../components/Logo/Logo';
import Inbox from '../../components/Inbox/Inbox';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import Popup from '../../components/Popup/Popup';
import useFormWithValidation from '../../utils/validator';
import { EMAIL_REGEXP } from '../../utils/constants';

function ProfileEdit(props) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const {
    handleUpdateUser,
    isOpen,
    onClose,
    text,
  } = props;

  useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, []);

  const handleSubmit = (evt) => {
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
        {`Редактировать профиль, ${name}`}
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
        />
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
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        text={text}
      />
    </section>
  );
}

export default ProfileEdit;
