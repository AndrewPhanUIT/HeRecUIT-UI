import {
    LOGIN, LOGIN_ERROR, LOGIN_SUCCESS,
    REGISTER, REGISTER_SUCCESS, REGISTER_ERROR,
} from './constants';

// Login
export const login = (phoneNumber, password) => {
    return {
        type: LOGIN,
        userInfo: {
            phoneNumber,
            password,
        },
    };
}

export const loginSuccess = (userInfo) => {
    return {
        type: LOGIN_SUCCESS,
        userInfo,
    };
}

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        error,
    };
}

// register
export const register = (phoneNumber, fullName, password) => {
    return {
        type: REGISTER,
        registerInfo: {
            phoneNumber, fullName, password,
        }
    };
};

export const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    };
}

export const registerError = (error) => {
    return {
        type: REGISTER_ERROR,
        error,
    };
};