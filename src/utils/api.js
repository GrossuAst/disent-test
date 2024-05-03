import { BASE_URL } from "./constants";

function checkResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export function fakeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(console.log('симуляция ошибки'));
        }, 1000);
    });
}

export function getAllCountries() {
    return fetch(`${BASE_URL + 'all'}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    })
    .then((res) => {
        return checkResponse(res);
    });
};

export function getInfo(name) {
    return fetch(`${BASE_URL}/name/${name}?fullText=true`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    })
    .then((res) => {
        return checkResponse(res);
    });
}