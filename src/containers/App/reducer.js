import produce from "immer"

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from './constants';
import { ACCESS_TOKEN } from "../../constants/constants";

export const initialState = {
    userInfo: null,
    userInfoLoading: false,
    userInfoErrorStatus: 200,
};

const globalState = (state = initialState, action) => {
    const resultState = null;
    switch(action.type){
        // Login
    case LOGIN:{
        return {
            ...state,
            userInfoLoading: true,
            userInfoErrorStatus: 200,
        };
    }
    case LOGIN_SUCCESS: {
        sessionStorage.setItem(ACCESS_TOKEN, action.userInfo.accessToken);
        return {
            ...state,
            userInfo: action.userInfo,
            userInfoLoading: false,
            userInfoErrorStatus: 200,
        }
    }
    case LOGIN_ERROR: {
        return {
            ...state,
            userInfo: null,
            userInfoLoading: false,
            userInfoErrorStatus: action.error,
        }
    }
    case REGISTER: {
        return {
            ...state,
            userInfo: null,
            userInfoLoading: true
        };
    }
    case REGISTER_SUCCESS: 
    case REGISTER_ERROR: {
        return {
            ...state,
            userInfoLoading: false,
        }
    }
    default: 
        return state;
    }
}

export default globalState;