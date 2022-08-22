import React from 'react';
import Button from '../../components/Button/Button';
import Inbox from '../../components/Inbox/Inbox';
import Logo from '../../components/Logo/Logo';
import SignFooter from './SignFooter';
import useFormWithValidation from '../../utils/validator';
import { EMAIL_REGEXP, Urls } from '../../utils/constants';

function Signin(props) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation();

  const { handleSignIn } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Signin</h2>
        <form onSubmit={handleSubmit}>
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
          <Button
            value="Войти"
            className="button_submit"
            isValid={isValid}
          />
        </form>

        <SignFooter
          text="Еще не зарегистрированы?"
          link={{
            url: Urls.SIGNUP,
            label: 'SignUp',
          }}
        />
        <SignFooter
          text="Забыли пароль?"
          link={{
            url: Urls.PROFILE_RESET_PASS,
            label: 'Reset',
          }}
        />
      </div>
    </section>
  );
}

export default Signin;
