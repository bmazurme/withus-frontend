/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Urls } from './constants';
import { IOption } from '../interfaces/interfaces';

// const Method = {
//   POST: 'POST',
//   PATCH: 'PATCH',
//   GET: 'GET',
// };

// const client_id = 'f88ff45c97e54e15a0c703325889f4b8';
// const client_secret = 'ccbd3f66e8544a1db36d7c09157949ca';

export class OAuth {
  options: IOption;
  constructor(options: IOption) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  async signUp({ code }: Record<string, string>) {
    // eslint-disable-next-line max-len
    const formBody = `client_id=f88ff45c97e54e15a0c703325889f4b8&client_secret=ccbd3f66e8544a1db36d7c09157949ca&grant_type=authorization_code&code=${code}`;
    const res = await fetch('https://oauth.yandex.ru/token', {
      method: 'POST',
      body: formBody,
    });
    console.log('res', res);

    return this.checkResponse(res);
  }

  async getInfo({ code, token }: { code: string, token: Record<string, string> }) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'OAuth y0_AgAAAAABpMU3AAiKnQAAAADSuBfef6pw1J8ARFGEugCSPwtPa_7dOpc');
    // myHeaders.append('Cookie', 'yandexuid=738317271667162136');

    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Access-Control-Allow-Headers', 'Content-Type');

    const res = await fetch('https://login.yandex.ru/info', {
      // mode: 'no-cors',
      method: 'GET',
      headers: myHeaders,
      referrerPolicy: 'no-referrer',
      // redirect: 'follow',
    });

    console.log('--', res);

    return this.checkResponse(res);
  }

  // async signUp({ code }: Record<string, string>) {
  //   const formBody =
  // eslint-disable-next-line max-len
  // `client_id=f88ff45c97e54e15a0c703325889f4b8&client_secret=ccbd3f66e8544a1db36d7c09157949ca&grant_type=authorization_code&code=${code}`;
  //   const res = await fetch('https://oauth.yandex.ru/token', {
  //     method: 'POST',
  //     body: formBody,
  //   });

  //   return this.checkResponse(res);
  // }
}

const oauth = new OAuth({
  baseUrl: Urls.OAUTH.YANDEX,
  headers: {
    Host: 'oauth.yandex.ru',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default oauth;
