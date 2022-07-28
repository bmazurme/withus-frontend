import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import auth from '../../utils/authApi';
import { PROFILE_URL } from '../../utils/constants';

function SignConfirm(props) {
  const params = useParams();
  const { token } = params;
  const { navigate } = props;
  const checkResult = auth.confirmEmail(token);
  const message = checkResult
    ? 'Email was approved'
    : 'Email was not found';

  if (token) {
    setTimeout(() => (navigate(PROFILE_URL)), 10000);
  }

  return (
    <section>
      <div className="container">
        <h2>Title</h2>
        <p>{message}</p>
        <NavLink to="/signin">
          Go to signin
        </NavLink>
      </div>
    </section>
  );
}

export default SignConfirm;
