import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESS} from './constants';

export const requestLogin = (usernameOrPhoneNumber, password) => {
    return {
        type: LOGIN,
        userInfo: {
            usernameOrPhoneNumber,
            password
        }
    };
}