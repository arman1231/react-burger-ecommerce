import { BASE_URL } from "./constants";
import { IIngridient, TUser } from "./types";

type TApiConfig = {
  baseUrl: string
}

type TError = {
  message: string;
}

type TCredentials = {
  accessToken: string;
  refreshToken: string;
}

type TResponse = { success: boolean };

type TRefreshTokenResponse = TResponse & TCredentials;

type TSuccessResponse = TResponse & { message: string };

type TUserResponse = TResponse &  { user: Omit<TUser, "password"> };

type TAuthResponse = TUserResponse & TCredentials;

type TOrder = { number: number };

type TOrderResponse = TResponse & { name: string } & { order: TOrder };

type TIngredientsResponse = TResponse & { data: IIngridient[] };

class Api {
  _baseUrl: string;

  constructor({ baseUrl }: TApiConfig) {
    this._baseUrl = baseUrl;
    this._checkResponse = this._checkResponse.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
  }

  async _checkResponse<T>(res: Response): Promise<T> {
    const json = await res.json();
    if (res.ok) {
      return json
    } else {
      throw await json();
    }
  }

async fetchWithRefresh<T>(url: string, options: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, options)
    return await this._checkResponse<T>(res)
  } catch (err) {
    if ((err as TError).message === "jwt expired") {
      console.log("at refresh");
      const refreshData = await this.refreshToken();
      if (!refreshData.success) {
        throw refreshData;
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);

      (options.headers as Headers).set("authorization", refreshData.accessToken);

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
    }).then(res => this._checkResponse<TIngredientsResponse>(res));
  }

  makeOrder(orderList: string[]) {
    return this.fetchWithRefresh<TOrderResponse>(`${this._baseUrl}/api/orders`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("accessToken")!,
      },
      method: "POST",
      body: JSON.stringify({
        ingredients: orderList,
      }),
      // credentials: 'include',
    })
  }

  register(email: string, password: string, name: string) {
    return fetch(`${this._baseUrl}/api/auth/register`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      // credentials: 'include',
    }).then(res => this._checkResponse<TAuthResponse>(res));
  }

  login(email: string, password: string) {
    return fetch(`${this._baseUrl}/api/auth/login`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
      // credentials: 'include',
    }).then(res => this._checkResponse<TAuthResponse>(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/api/auth/logout`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
      // credentials: 'include',
    }).then(res => this._checkResponse<TSuccessResponse>(res));
  }

  refreshToken() {
    return fetch(`${this._baseUrl}/api/auth/token`, {
      headers: {
      "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    }).then(res => this._checkResponse<TRefreshTokenResponse>(res));
  }

  getUser() {
    return this.fetchWithRefresh<TUserResponse>(`${this._baseUrl}/api/auth/user`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("accessToken")!,
      },
    })
  }

  updateUser(email: string, password: string, name: string) {
    return this.fetchWithRefresh(`${BASE_URL}/api/auth/user`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken")!,
      },
      body: JSON.stringify({ email, password, name }),
    })
  }

  forgotPassword(email: string) {
    return fetch(`${this._baseUrl}/api/password-reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ email }),
      // credentials: 'include',
    }).then(res => this._checkResponse<TSuccessResponse>(res));
  }

  resetPassword(password: string, token: string) {
    return fetch(`${this._baseUrl}/api/password-reset/reset`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({ password, token }),
      // credentials: 'include',
    }).then(res => this._checkResponse<TSuccessResponse>(res));
  }

}

export const api = new Api({
  //baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
  baseUrl: `${BASE_URL}`,
});
