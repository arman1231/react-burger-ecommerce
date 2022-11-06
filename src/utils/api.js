import { BASE_URL } from "../utils/constants";
class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        console.log(`Ошибка: ${res.status}`);
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getIngridients() {
      return fetch(`${this._baseUrl}/api/ingredients`, {
        headers: this._headers,
        // credentials: 'include',
      }).then(this._checkResponse);
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
  
  
  