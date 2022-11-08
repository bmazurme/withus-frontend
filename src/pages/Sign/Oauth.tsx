import React from 'react';
import { useSearchParams } from 'react-router-dom';
import oauth from '../../utils/oauthApi';
// import testApi from '../../utils/testApi';

function Oauth({ navigate }: any) {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  // testApi.signUp({ code: code! });

  oauth.signUp({ code: code! })
    .then((result: any) => {
      console.log('result', result);
      console.log('>>');
      oauth.getInfo({ code: code!, token: result! })
        .then((x) => console.log('>>>>', x))
        .catch((error) => {
          const { message } = error as Error;
          if (message === 'Ошибка 404') {
          // navigate('PageNotFound');
            console.log('error', error);
          }
        });

      // testApi.signUp({ code: code!, token: result! });
    })
    .catch((error) => {
      const { message } = error as Error;

      if (message === 'Ошибка 404') {
        // navigate('PageNotFound');
        console.log('error', error);
      }
    });

  return (
    <section className="sign">
      <div className="container">
        <h2 className="sign__title">OAuth</h2>

      </div>
    </section>
  );
}

export default Oauth;

// {
//   "access_token": "y0_AgAAAAABpMU3AAiKnQAAAADSuBfef6pw1J8ARFGEugCSPwtPa_7dOpc",
//   "expires_in": 31535855,
// eslint-disable-next-line max-len
//   "refresh_token": "1:1OJQujmxdHvP-V7_:92_HdzvCfwHn84baTpP-H44pyfG7pTizgsrBfD-ehVm9jpChwoBDawlZs96UFBHiT-1vhx_eJCTO0A:LGZ4WAkODpj8ToqsrW2KLw",
//   "token_type": "bearer"
// }
