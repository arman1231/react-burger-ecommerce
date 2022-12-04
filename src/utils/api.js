import { BASE_URL } from "../utils/constants";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._checkResponse = this._checkResponse.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
  }
  _checkResponse(res) {
    const json = res.json();
    if (res.ok) {
      return json
    } else {
      return json.then(err => Promise.reject(err));
    }
}

async fetchWithRefresh(url, options) {
  try {
    const res = await fetch(url, options)
    return await this._checkResponse(res)
  } catch (err) {
    if (err.message === "jwt expired") {
      console.log("at refresh");
      const refreshData = await this.refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await this._checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
}

  getIngridients() {
    return fetch(`${this._baseUrl}/api/ingredients`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }     // credentials: 'include',
    }).then(this._checkResponse);
  }

  makeOrder(orderList) {
    return this.fetchWithRefresh(`${this._baseUrl}/api/orders`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("accessToken"),
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
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/api/auth/login`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/api/auth/logout`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  refreshToken() {
    return fetch(`${this._baseUrl}/api/auth/token`, {
      headers: {
      "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    }).then(this._checkResponse);
  }

  getUser() {
    return this.fetchWithRefresh(`${this._baseUrl}/api/auth/user`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("accessToken"),
      },
    })
  }

  updateUser(email, password, name) {
    return this.fetchWithRefresh(`${BASE_URL}/api/auth/user`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ email, password, name }),
    })
  }

  forgotPassword(email) {
    return fetch(`${this._baseUrl}/api/password-reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

  resetPassword(password, token) {
    return fetch(`${this._baseUrl}/api/password-reset/reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ password, token }),
      // credentials: 'include',
    }).then(this._checkResponse);
  }

}

export const api = new Api({
  //baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
  baseUrl: `${BASE_URL}`,
});
