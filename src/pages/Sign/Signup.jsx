import React from 'react';
import Button from '../../components/Button/Button';
import Inbox from '../../components/Inbox/Inbox';
import Logo from '../../components/Logo/Logo';
import Popup from '../../components/Popup/Popup';
import SignFooter from './SignFooter';
import useFormWithValidation from '../../utils/validator';
import { EMAIL_REGEXP, SIGNIN_URL } from '../../utils/constants';

function Signup(props) {
  const {
    handleSignUp,
    isOpen,
    onClose,
    text,
  } = props;

  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  };

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Signup</h2>
        <form onSubmit={handleSubmit}>
          <Inbox
            label="Name"
            name="name"
            type="text"
            id="name-input"
            autoComplete="off"
            onChange={handleChange}
            errors={errors}
            value={values.name || ''}
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
            value={values.email || ''}
            required
          />
          <Inbox
            onChange={handleChange}
            label="Password"
            errors={errors}
            name="password"
            type="password"
            id="password-input"
            autoComplete="off"
            value={values.password || ''}
            minLength={6}
            maxLength={20}
            required
          />
          <Inbox
            onChange={handleChange}
            label="Confirm password"
            errors={errors}
            name="confirmPassword"
            type="password"
            id="confirmPassword-input"
            autoComplete="off"
            value={values.password || ''}
            minLength={6}
            maxLength={20}
            required
          />
          <Button
            value="Зарегистрироваться"
            className="button_submit"
            isValid={isValid}
          />
        </form>
        <SignFooter
          text="Уже зарегистрированы?"
          link={{
            url: SIGNIN_URL,
            label: 'Войти',
          }}
        />
      </div>
      <Popup
        onClose={onClose}
        text={text}
        isOpen={isOpen}
      />
    </section>
  );
}

export default Signup;
