import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Link from '../../components/Link/Link';
import auth from '../../utils/authApi';
import { PROFILE_URL, SIGNIN_URL } from '../../utils/constants';

function SignConfirm(props) {
  const params = useParams();
  const { token } = params;
  const { navigate } = props;
  const [message, setMessage] = React.useState('Email was not found');

  useEffect(() => {
    auth.confirmEmail(token)
      .then((result) => {
        if (result.message === 'ok') {
          setMessage('Email was approved');
        }
      })
      .catch((error) => {
        if (error.message === 'Ошибка 404') {
          navigate('PageNotFound');
        }
      });
  }, []);

  if (token) {
    setTimeout(() => (navigate(PROFILE_URL)), 10000);
  }

  return (
    <section className="sign">
      <div className="container">
        <h2 className="sign__title">Title</h2>
        <p>{message}</p>
        <ul className="sign__links">
          <Link
            className="sign__link"
            to={SIGNIN_URL}
            label="Go to signin"
          />
        </ul>
      </div>
    </section>
  );
}

export default SignConfirm;
