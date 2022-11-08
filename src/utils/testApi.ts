/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Urls } from './constants';
import { IOption } from '../interfaces/interfaces';

const Method = {
  POST: 'POST',
  // PATCH: 'PATCH',
  // GET: 'GET',
};
export class TestAuth {
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

  async signUp({ code }: { code: string }) {
    // console.log(token.access_token);

    const res = await fetch('https://ya-praktikum.tech/api/v2/oauth/yandex', {
      method: Method.POST,
      headers: {
        // ...this.options.headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify({
        code,
        redirect_uri: 'http://localhost:3000/verification_code',
        // access_token: token.access_token,
      }),
    });

    // console.log('>>', res);

    return this.checkResponse(res);
  }
}

const testApi = new TestAuth({
  baseUrl: Urls.AUTH,
  headers: {
    // 'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
  },
});

export default testApi;
