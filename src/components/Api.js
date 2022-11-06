export default class Api {
    constructor() {
        this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-52/';
        this._headers = {
            authorization: '26b767c8-a375-4aee-a307-2b3ce9d044ff',
            'Content-Type': 'application/json'
        }
    }

    _get(link) {
        return fetch(this._baseUrl + link, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => this._getResponseData(res))
           
    }

    _post(link, model) {
        return fetch(this._baseUrl + link, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(model)
        })
            .then((res) => this._getResponseData(res))

    }

    _patch(link, model) {
        return fetch(this._baseUrl + link, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(model)
        })
            .then((res) => this._getResponseData(res))

    }

    _put(link) {
        return fetch(this._baseUrl + link, {
            method: 'PUT',
            headers: this._headers,
        })
            .then((res) => this._getResponseData(res))

    }

    _delete(link) {
        return fetch(this._baseUrl + link, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => this._getResponseData(res))

    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getInitialCards() {
        return this._get('cards');
    }

    getUserInformation() {
        return this._get('users/me');
    }

    setUserUpdate(model) {
        return this._patch('users/me', model);
    }

    setCreateCard(model) {
        return this._post('cards', model);
    }

    setDeleteCard(cardId) {
        return this._delete(`cards/${cardId}`);
    }

    setLikeCard(cardId) {
        return this._put(`cards/${cardId}/likes`);
    }

    setDeleteLikeCard(cardId) {
        return this._delete(`cards/${cardId}/likes`);
    }

    setUserAvatar(model) {
        return this._patch('users/me/avatar', model);
    }
}