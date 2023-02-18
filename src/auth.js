export const BASE_URL = 'https://auth.nomoreparties.co/';

export const register = (userdata) => {
    console.log(`auth.register: ${userdata}`);
    return fetch (`${BASE_URL}signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: userdata.password,
            email: userdata.email
        })
    })
    .then(checkResponse)
}

export const authorize = (userdata) => {
    return fetch (`${BASE_URL}signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: userdata.password,
            email: userdata.email
        })
    })
    .then(checkResponse)
}

export const checkToken = (jwt) => {
    return fetch (`${BASE_URL}users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
        },
    })
    .then(checkResponse)
}

const checkResponse = (res) =>{
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
}

   
