import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Inbox from '../../components/Inbox/Inbox';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import { SIGNIN_URL } from '../../utils/constants';
import useFormWithValidation from '../../utils/validator.ts';

function ProfileNewPass(props) {
  const params = useParams();
  const { token } = params;
  const { handleNewPassword } = props;
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleNewPassword({
      password: values.newPassword,
      token,
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
          />
        </form>
        <ul className="profile__links">
          <Link
            className="profile__link"
            to={SIGNIN_URL}
            label="SignIn"
          />
        </ul>
      </div>
    </section>
  );
}

export default ProfileNewPass;
