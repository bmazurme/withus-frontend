/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Urls, STORE_TOKEN_NAME } from './constants';
import { IOption } from '../interfaces/interfaces';

const Method = {
  POST: 'POST',
  PATCH: 'PATCH',
  GET: 'GET',
};
export class Auth {
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

  async signUp({ email, password, name }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/signup`, {
      method: Method.POST,
      headers: {
        ...this.options.headers,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
    return this.checkResponse(res);
  }

  async signIn({ email, password }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/signin`, {
      method: Method.POST,
      headers: {
        ...this.options.headers,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await this.checkResponse(res);
    if (data.token) {
      localStorage.setItem(STORE_TOKEN_NAME, data.token);
      return data;
    }
    return null;
  }

  async resetPassword({ email }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/reset/password`, {
      method: Method.POST,
      headers: {
        ...this.options.headers,
      },
      body: JSON.stringify({
        email,
      }),
    });
    return this.checkResponse(res);
  }

  async newPassword({ password, token }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/reset/password`, {
      method: Method.PATCH,
      headers: {
        ...this.options.headers,
      },
      body: JSON.stringify({
        password,
        token,
      }),
    });
    return this.checkResponse(res);
  }

  async getUser() {
    const res = await fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        ...this.options.headers,
        Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
      },
    });
    return this.checkResponse(res);
  }

  async patchUser(user: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/users/me`, {
      method: Method.PATCH,
      headers: {
        ...this.options.headers,
        Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
      },
      body: JSON.stringify(user),
    });
    return this.checkResponse(res);
  }

  async checkToken(token: string) {
    const res = await fetch(`${this.options.baseUrl}/users/me`, {
      method: Method.GET,
      headers: {
        ...this.options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return this.checkResponse(res);
  }

  async confirmEmail(token: string) {
    const res = await fetch(`${this.options.baseUrl}/confirm/${token}`, {
      method: Method.GET,
      headers: {
        ...this.options.headers,
      },
    });
    return this.checkResponse(res);
  }

  async patchPassword({ password, newPassword, email }: Record<string, string>) {
    const res = await fetch(`${this.options.baseUrl}/users/password`, {
      method: Method.PATCH,
      headers: {
        ...this.options.headers,
        Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
      },
      body: JSON.stringify({ password, newPassword, email }),
    });
    return this.checkResponse(res);
  }
}

const auth = new Auth({
  baseUrl: Urls.AUTH,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
  },
});

export default auth;
