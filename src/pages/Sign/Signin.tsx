/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Button from '../../components/Button/Button';
import Inbox from '../../components/Inbox/Inbox';
import Logo from '../../components/Logo/Logo';
import SignFooter from './SignFooter';
import useFormWithValidation from '../../utils/validator';
import { EMAIL_REGEXP, Urls } from '../../utils/constants';
import { IValid, ISignProps } from '../../interfaces/interfaces';

function Signin({ handleSign }: ISignProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handleSign({
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
            placeholder={''}
            minLength={5}
            maxLength={20}
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
            placeholder={''}
            pattern={''}
          />
          <Button
            typeButton="submit"
            value="Войти"
            className="button_submit"
            isValid={isValid}
          />
        </form>

        <SignFooter
          text="Еще не зарегистрированы?"
          link={{
            url: Urls.SIGN.UP,
            label: 'SignUp',
          }}
        />
        <SignFooter
          text="Забыли пароль?"
          link={{
            url: Urls.PASSWORD.RESET,
            label: 'Reset',
          }}
        />
      </div>
    </section>
  );
}

export default Signin;
