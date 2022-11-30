import { BASE_URL } from "../utils/constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._checkResponse = this._checkResponse.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
    }
    console.log(`Ошибка: ${res.status}`);
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async fetchWithRefresh(url, options) {
    try {
      const res = await fetch(url, options);
      return await this._checkResponse(res);
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await this.refreshToken(); //обновляем токен
        if (!refreshData.success) {
          Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //повторяем запрос
        return await this._checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  }

  getIngridients() {
    return fetch(`${this._baseUrl}/api/ingredients`, {
      headers: this._headers,
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  makeOrder(token, orderList) {
    return this.fetchWithRefresh(`${this._baseUrl}/api/orders`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      method: "POST",
      body: JSON.stringify({
        ingredients: orderList,
      }),
      // credentials: 'include',
    })
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/api/auth/register`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/api/auth/login`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ email, password }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  logout(token) {
    return fetch(`${this._baseUrl}/api/auth/logout`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ token }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  refreshToken(token) {
    return fetch(`${this._baseUrl}/api/auth/token`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ token }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  getUser(token) {
    return fetch(`${this._baseUrl}/api/auth/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(this._checkResponse);
  }

  updateUser(token, email, password, name) {
    return this.fetchWithRefresh(`${BASE_URL}/api/auth/user`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ email, password, name }),
    })
  }
}

export const api = new Api({
  //baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
  baseUrl: `${BASE_URL}`,
  headers: {
    // authorization: `${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json",
  },
});
