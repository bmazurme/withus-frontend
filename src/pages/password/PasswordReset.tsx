/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Logo from '../../components/Logo/Logo';
import Inbox from '../../components/Inbox/Inbox';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import { EMAIL_REGEXP, Urls } from '../../utils/constants';
import useFormWithValidation from '../../utils/validator';
import { IValid, IPasswordProps } from '../../interfaces/interfaces';

function PasswordReset({ handler }: IPasswordProps) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handler({
      email: values.email,
    });
  };

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">Reset password</h2>
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
            minLength={6}
            maxLength={20}
          />
          <Button
            typeButton="submit"
            value="Reset"
            className="button_submit"
            isValid={isValid}
          />
        </form>
        <ul className="profile__links">
          <Link
            className="profile__link"
            to={Urls.SIGN.IN}
            label="Back"
            onHandleClick={null}
          />
        </ul>
      </div>
    </section>
  );
}

export default PasswordReset;
