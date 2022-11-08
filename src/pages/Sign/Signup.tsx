/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
// import { NavLink } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Inbox from '../../components/Inbox/Inbox';
import Logo from '../../components/Logo/Logo';
import SignFooter from './SignFooter';

import useFormWithValidation from '../../utils/validator';
import { EMAIL_REGEXP, Urls } from '../../utils/constants';
import { IValid, ISignProps } from '../../interfaces/interfaces';

function Signup({ handleSign }: ISignProps) {
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
      name: values.name,
    });
  };

  const CLIENT_ID = 'f88ff45c97e54e15a0c703325889f4b8';
  const REDIRECT_URI = 'http://localhost:3000/verification_code';
  const OAUTH_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

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
            pattern={''}
            placeholder={''}
            minLength={4}
            maxLength={20}
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
            placeholder={''}
            minLength={4}
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
            placeholder={''}
            minLength={6}
            maxLength={20}
            required
            pattern={''}
          />
          {/* <Inbox
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
          /> */}
          <Button
            typeButton="submit"
            value="Зарегистрироваться"
            className="button_submit"
            isValid={isValid}
          />
        </form>
        <SignFooter
          text="Уже зарегистрированы?"
          link={{
            url: Urls.SIGN.IN,
            label: 'SignIn',
          }}
        />
        <a
          className="sign__link"
          href={OAUTH_URL}
        >
          OAUTH
        </a>
      </div>
    </section>
  );
}

export default Signup;
