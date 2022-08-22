import { BASE_URL } from './constants.js';

//класс запроса к серверу
class Api {
  constructor({url, headers}) {
    this._url = url; //ссылка сервера
    this._headers = headers; //заголовок
  }

  //метод проверки результата запроса к серверу
  _checkResponse(res) {
    try {
      if (res.status === 200 || res.status === 201){
        return res.json();
      }
    } catch(error){
      return (error)
    }
  }

  //регистрация
  register(email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse)
  };

  //аутентификация
  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse)
  };

  //проверка токена
  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this.headers,
    })
    .then(this._checkResponse)
  }

  //выход из системы
  logout() {
    return fetch(`${this._url}/signout`, {
      method: "GET",
      credentials: "include",
      headers: this.headers,
    })
    .then(this._checkResponse)
  }

}

const auth = new Api({
  url: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

export default auth