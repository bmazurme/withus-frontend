import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Link from '../../components/Link/Link';
import auth from '../../utils/authApi';
import { Urls } from '../../utils/constants';

function SignConfirm({ navigate }: any) {
  const params = useParams();
  const { token } = params;
  const [mess, setMessage] = React.useState('Email was not found');

  useEffect(() => {
    auth.confirmEmail(token!)
      .then((result: any) => {
        if (result.message === 'ok') {
          setMessage('Email was approved');
        }
      })
      .catch((error) => {
        const { message } = error as Error;
        if (message === 'Ошибка 404') {
          navigate('PageNotFound');
        }
      });
  }, []);

  if (token) {
    setTimeout(() => (navigate(Urls.PROFILE.INDEX)), 10000);
  }

  return (
    <section className="sign">
      <div className="container">
        <h2 className="sign__title">Title</h2>
        <p>{mess}</p>
        <ul className="sign__links">
          <Link
            className="sign__link"
            to={Urls.SIGN.IN}
            label="Go to signin"
            onHandleClick={null}
          />
        </ul>
      </div>
    </section>
  );
}

export default SignConfirm;
