class API {
    constructor({baseUrl, headers}){
        this._url = baseUrl;
        this._headers = headers;
    }

    getAllPageData(){
        return Promise.all([this.getProfile(), this.getAllCards()])
    }

    getProfile(){
        return fetch(`${this._url}users/me`, {
                headers: this._headers
            })
            .then(this._checkResponse)
    }
    
    setUserInfo(data){
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
              })
        })
        .then(this._checkResponse)
    }

    setUserAvatar(data){
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
              })
        })
        .then(this._checkResponse)
    }
    
    getAllCards(){
        return fetch(`${this._url}cards/`, {
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    addNewCard({name, link}){
        return fetch(`${this._url}cards/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({name, link})
        })
        .then(this._checkResponse)
    }

    deleteCard(id){
        return fetch(`${this._url}cards/${id}/`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    changeLikeCardStatus(id, isLiked){
        return isLiked ? this._addLike(id) : this._deleteLike(id)
    }

    _addLike(id){
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    _deleteLike(id){
        return fetch(`${this._url}cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    _checkResponse(res){
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`)
    }
}

const apiConfig = {
    baseUrl:'https://mesto.nomoreparties.co/v1/cohort-54/',
    headers:{
      authorization: 'b198e5bd-009b-4a6a-95c9-40c8f779925a',
      "Content-Type": 'application/json'
    }   
  }

export const api = new API(apiConfig);