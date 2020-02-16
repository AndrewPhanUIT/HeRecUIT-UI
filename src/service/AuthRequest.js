import {request} from '../constants/AppUtils';
import {API_PUBLIC_URL, API_BASE_URL} from '../constants/ApiConstants';

export const loginRequest = (loginForm) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.login,
        method: 'POST',
        body: JSON.stringify(loginForm)
    });
    return resp;
}

export const registerRequest = (registerForm) => {
    return request({
        url: API_BASE_URL + API_PUBLIC_URL.register,
        method: 'POST',
        body: JSON.stringify(registerForm)
    });
}

export const test = json => {
    let tempJson = JSON.stringify(json) + "";
    let temp = tempJson.replace(/\\n\s*/g, '');
    temp = temp.replace(/\\"\s*/g, '"');
    return fetch(API_BASE_URL + API_PUBLIC_URL.test, {
        method: 'POST',
        body: temp
    }).then(res => res.json);
}