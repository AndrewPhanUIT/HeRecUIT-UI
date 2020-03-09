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
    QUERY_APPOINTMENT_DETAIL,
    QUERY_APPOINTMENT_DETAIL_SUCCESS,
    QUERY_APPOINTMENT_DETAIL_ERROR,
    QUERY_DIAGNOSIS_DETAIL,
    QUERY_DIAGNOSIS_DETAIL_SUCCESS,
    QUERY_DIAGNOSIS_DETAIL_ERROR,
    SELECT_ITEM,
    ADD_DIAGNOSIS,
    ADD_DIAGNOSIS_SUCCESS,
    ADD_DIAGNOSIS_ERROR,
    ADD_APPOINTMENT,
    ADD_APPOINTMENT_SUCCESS,
    ADD_APPOINTMENT_ERROR,
    CLEAR_ERROR_MESS,
    ADD_PERMISSION,
    ADD_PERMISSION_SUCCESS,
    ADD_PERMISSION_ERROR,
    CHANGE_MENU,
    CHANGE_QUERY,
} from './constants';
import {ACCESS_TOKEN, USER_INFO} from "../../constants/constants";
import {isEmpty} from 'lodash';

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
    diagnosisDetail: null,
    diagnosisDetailLoading: false,
    appointmentDetail: null,
    appointmentDetailLoading: false,
    error: '',
    selectedItem: null,
    loadingAddNewRecord: false,
    loadingAddPermission: false,
    menuIndex: 1,
    query: '',
};

const globalState = (state = initialState, action) => {
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
        case QUERY_DIAGNOSIS_DETAIL:
            {
                return {
                    ...state,
                    diagnosisDetail: null,
                    diagnosisDetailLoading: true
                }
            }
        case QUERY_DIAGNOSIS_DETAIL_SUCCESS:
            {
                return {
                    ...state,
                    diagnosisDetail: action.diagnosisDetail,
                    diagnosisDetailLoading: false
                }
            }
        case QUERY_DIAGNOSIS_DETAIL_ERROR:
            {
                return {
                    ...state,
                    diagnosisDetail: null,
                    diagnosisDetailLoading: false,
                    error: action.error
                }
            }
        case QUERY_APPOINTMENT_DETAIL:
            {
                return {
                    ...state,
                    appointmentDetail: null,
                    appointmentDetailLoading: true
                }
            }
        case QUERY_APPOINTMENT_DETAIL_SUCCESS:
            {
                return {
                    ...state,
                    appointmentDetail: action.appointmentDetail,
                    appointmentDetailLoading: false
                }
            }
        case QUERY_APPOINTMENT_DETAIL_ERROR:
            {
                return {
                    ...state,
                    appointmentDetail: null,
                    appointmentDetailLoading: false,
                    error: action.error
                }
            }
        case SELECT_ITEM: {
            return {
                ...state,
                selectedItem: isEmpty(action.queryType ) ? null : { queryType: action.queryType, key: action.key},
            };
        }
        case ADD_DIAGNOSIS: 
        case ADD_APPOINTMENT: {
            return {
                ...state,
                loadingAddNewRecord: true,
                error: '',
            }
        }
        case ADD_DIAGNOSIS_SUCCESS: 
        case ADD_APPOINTMENT_SUCCESS: {
            return {
                ...state,
                loadingAddNewRecord: false,
                error: '',
            }
        }
        case ADD_DIAGNOSIS_ERROR:
        case ADD_APPOINTMENT_ERROR: {
            return {
                ...state,
                loadingAddNewRecord: false,
                error: action.error,
            }
        }
        case CLEAR_ERROR_MESS: {
            return {
                ...state,
                error: '',
            }
        }
        case ADD_PERMISSION: {
            return {
                ...state,
                error: '',
                loadingAddPermission: true,
            }
        }
        case ADD_PERMISSION_SUCCESS: {
            return {
                ...state,
                error: '',
                loadingAddPermission: false,
            }
        }
        case ADD_PERMISSION_ERROR: {
            return {
                ...state,
                error: action.error,
                loadingAddPermission: false,
            }
        }
        case CHANGE_MENU: {
            return {
                ...state,
                menuIndex: action.index,
            };
        }
        case CHANGE_QUERY: {
            return {
                ...state,
                query: action.query,
            };
        }
        default:
            return state;
    }
}

export default globalState;