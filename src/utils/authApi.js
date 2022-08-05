import { AUTH_URL, STORE_TOKEN_NAME } from './constants';

export class Auth {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  async signUp({ email, password, name }) {
    const res = await fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
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

  async signIn({ email, password }) {
    const res = await fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
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

  async resetPassword({ email }) {
    const res = await fetch(`${this.options.baseUrl}/reset/password`, {
      method: 'POST',
      headers: {
        ...this.options.headers,
      },
      body: JSON.stringify({
        email,
      }),
    });
    return this.checkResponse(res);
  }

  async newPassword({ password, token }) {
    const res = await fetch(`${this.options.baseUrl}/reset/password`, {
      method: 'PATCH',
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

  async patchUser(user) {
    const res = await fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this.options.headers,
        Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
      },
      body: JSON.stringify(user),
    });
    return this.checkResponse(res);
  }

  async checkToken(token) {
    const res = await fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this.options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return this.checkResponse(res);
  }

  async confirmEmail(token) {
    const res = await fetch(`${this.options.baseUrl}/confirm/${token}`, {
      method: 'GET',
      headers: {
        ...this.options.headers,
      },
    });
    return this.checkResponse(res);
  }

  async patchPassword({ password, newPassword, email }) {
    const res = await fetch(`${this.options.baseUrl}/users/password`, {
      method: 'PATCH',
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
  baseUrl: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(STORE_TOKEN_NAME)}`,
  },
});

export default auth;
