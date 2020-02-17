import produce from "immer"

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    QUERY_ERROR,
    QUERY,
    QUERY_SUCCESS,
    QUERY_DIAGNOSIS,
    QUERY_DIAGNOSIS_SUCCESS,
    QUERY_DIAGNOSIS_ERROR,
    QUERY_APPOINTMENTS,
    QUERY_APPOINTMENTS_SUCCESS,
    QUERY_APPOINTMENTS_ERROR,
    QUERY_PERMISSION,
    QUERY_PERMISSION_SUCCESS,
    QUERY_PERMISSION_ERROR,
} from './constants';
import {ACCESS_TOKEN, USER_INFO} from "../../constants/constants";

export const initialState = {
    userInfo: null,
    userInfoLoading: false,
    userInfoErrorStatus: 200,
    diagnosis: [],
    diagnosisLoading: false,
    appointments: [],
    appointmentsLoading: false,
    permissions: [],
    permissionsLoading: false,
    error: ''
};

const globalState = (state = initialState, action) => {
    const resultState = null;
    switch (action.type) {
            // Login
        case LOGIN:
            {
                return {
                    ...state,
                    userInfoLoading: true,
                    userInfoErrorStatus: 200
                };
            }
        case LOGIN_SUCCESS:
            {
                sessionStorage.setItem(ACCESS_TOKEN, action.userInfo.accessToken);
                sessionStorage.setItem(USER_INFO, JSON.stringify(action.userInfo));
                return {
                    ...state,
                    userInfo: action.userInfo,
                    userInfoLoading: false,
                    userInfoErrorStatus: 200
                }
            }
        case LOGIN_ERROR:
            {
                return {
                    ...state,
                    userInfo: null,
                    userInfoLoading: false,
                    userInfoErrorStatus: action.error
                }
            }
        case REGISTER:
            {
                return {
                    ...state,
                    userInfo: null,
                    userInfoLoading: true
                };
            }
        case REGISTER_SUCCESS:
        case REGISTER_ERROR:
            {
                return {
                    ...state,
                    userInfoLoading: false
                }
            }
        case QUERY:
            {
                return {
                    ...state,
                    diagnosis: [],
                    diagnosisLoading: true,
                    appointments: [],
                    appointmentsLoading: true
                }
            }
        case QUERY_SUCCESS:
            {
                return {
                    ...state,
                    diagnosis: action.diagnosis,
                    diagnosisLoading: false,
                    appointments: action.appointments,
                    appointmentsLoading: false
                }
            }
        case QUERY_ERROR:
            {
                return {
                    ...state,
                    diagnosis: [],
                    diagnosisLoading: false,
                    appointments: [],
                    appointmentsLoading: false,
                    error: action.error
                }
            }
        case QUERY_DIAGNOSIS:
            {
                return {
                    ...state,
                    diagnosis: [],
                    diagnosisLoading: true
                }
            }
        case QUERY_DIAGNOSIS_SUCCESS:
            {
                return {
                    ...state,
                    diagnosis: action.diagnosis,
                    diagnosisLoading: false
                }
            }
        case QUERY_DIAGNOSIS_ERROR:
            {
                return {
                    ...state,
                    diagnosis: [],
                    diagnosisLoading: false,
                    error: action.error
                }
            }
        case QUERY_APPOINTMENTS:
            {
                return {
                    ...state,
                    appointments: [],
                    appointmentsLoading: true
                }
            }
        case QUERY_APPOINTMENTS_SUCCESS:
            {
                return {
                    ...state,
                    appointments: action.appointments,
                    appointmentsLoading: false
                }
            }
        case QUERY_APPOINTMENTS_ERROR:
            {
                return {
                    ...state,
                    appointments: [],
                    appointmentsLoading: false,
                    error: action.error
                }
            }
        case QUERY_PERMISSION:
            {
                return {
                    ...state,
                    permissions: [],
                    permissionsLoading: true
                }
            }
        case QUERY_PERMISSION_SUCCESS:
            {
                return {
                    ...state,
                    permissions: action.permissions,
                    permissionsLoading: false
                }
            }
        case QUERY_PERMISSION_ERROR:
            {
                return {
                    ...state,
                    permissions: [],
                    permissionsLoading: false,
                    error: action.error
                }
            }
        default:
            return state;
    }
}

export default globalState;