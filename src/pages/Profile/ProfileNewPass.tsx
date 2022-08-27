/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Inbox from '../../components/Inbox/Inbox';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import { Urls } from '../../utils/constants';
import useFormWithValidation from '../../utils/validator';

interface IProps {
  handleNewPassword: ({ password, token }: Record<string, string>) => void,
}

interface IValid {
  values: Record<string, string>,
  errors: Record<string, string>,
  isValid: boolean,
  handleChange: any,
}

function ProfileNewPass({ handleNewPassword }: IProps) {
  const params = useParams();
  const { token } = params;
  const {
    values,
    errors,
    isValid,
    handleChange,
  }: IValid = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    handleNewPassword({
      password: values.newPassword,
      token: token!,
    });
  };

  return (
    <section className="sign">
      <div className="container">
        <Logo />
        <h2 className="sign__title">New password</h2>
        <form onSubmit={handleSubmit}>
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
            value="Save"
            className="button_submit"
            isValid={isValid}
            typeButton="submit"
          />
        </form>
        <ul className="profile__links">
          <Link
            className="profile__link"
            to={Urls.SIGNIN}
            label="SignIn"
          />
        </ul>
      </div>
    </section>
  );
}

export default ProfileNewPass;
