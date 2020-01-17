
import {request} from '../constants/AppUtils';
import {API_PUBLIC_URL} from '../constants/ApiConstants';
import { API_BASE_URL } from './../constants/ApiConstants';

export const login = (loginRequest) => {
    return request({
        url: API_BASE_URL + API_PUBLIC_URL.loginCandidate,
        method: 'POST',
        body: JSON.stringify(loginRequest)
    })
}

export const signUp = (signUpRequest) => {
    return request({
        url: API_BASE_URL + API_PUBLIC_URL.signUpCandidate,
        method: 'POST',
        body: JSON.stringify(signUpRequest)
    });
}