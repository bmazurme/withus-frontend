import React from 'react';
import Logo from '../../components/Logo/Logo';
import Inbox from '../../components/Inbox/Inbox';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import { EMAIL_REGEXP, Urls } from '../../utils/constants';
import useFormWithValidation from '../../utils/validator';

function SignReset(props) {
  const { handleResetPassword } = props;

  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleResetPassword({
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
          />

          <Button
            value="Reset"
            className="button_submit"
            isValid={isValid}
          />
        </form>
        <ul className="profile__links">
          <Link
            className="profile__link"
            to={Urls.SIGNIN}
            label="Back"
          />
        </ul>
      </div>
    </section>
  );
}

export default SignReset;
