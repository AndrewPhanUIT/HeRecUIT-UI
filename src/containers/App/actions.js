import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    QUERY,
    QUERY_SUCCESS,
    QUERY_ERROR,
    QUERY_DIAGNOSIS,
    QUERY_DIAGNOSIS_SUCCESS,
    QUERY_DIAGNOSIS_ERROR,
    QUERY_APPOINTMENTS,
    QUERY_APPOINTMENTS_SUCCESS,
    QUERY_APPOINTMENTS_ERROR,
    QUERY_PERMISSION,
    QUERY_PERMISSION_SUCCESS,
    QUERY_PERMISSION_ERROR,
    QUERY_DIAGNOSIS_DETAIL,
    QUERY_DIAGNOSIS_DETAIL_SUCCESS,
    QUERY_DIAGNOSIS_DETAIL_ERROR,
    QUERY_APPOINTMENT_DETAIL,
    QUERY_APPOINTMENT_DETAIL_SUCCESS,
    QUERY_APPOINTMENT_DETAIL_ERROR,
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

// Login
export const login = (phoneNumber, password) => {
    return {
        type: LOGIN,
        userInfo: {
            phoneNumber,
            password
        }
    };
}

export const loginSuccess = (userInfo) => {
    return {type: LOGIN_SUCCESS, userInfo};
}

export const loginError = (error) => {
    return {type: LOGIN_ERROR, error};
}

// register
export const register = (phoneNumber, fullName, password) => {
    return {
        type: REGISTER,
        registerInfo: {
            phoneNumber,
            fullName,
            password
        }
    };
};

export const registerSuccess = () => {
    return {type: REGISTER_SUCCESS};
}

export const registerError = (error) => {
    return {type: REGISTER_ERROR, error};
};

export const query = (hyperledgerName) => {
    return {type: QUERY, hyperledgerName};
}

export const querySuccess = (diagnosis, appointments) => {
    return {type: QUERY_SUCCESS, diagnosis, appointments};
}

export const queryError = (error) => {
    return {type: QUERY_ERROR, error};
}

export const queryDiagnosis = (hyperledgerName) => {
    return {type: QUERY_DIAGNOSIS, hyperledgerName}
}

export const queryDiagnosisSuccess = (diagnosis) => {
    return {type: QUERY_DIAGNOSIS_SUCCESS, diagnosis};
}

export const queryDiagnosisError = (error) => {
    return {type: QUERY_DIAGNOSIS_ERROR, error};
}

export const queryAppointments = (hyperledgerName) => {
    return {type: QUERY_APPOINTMENTS, hyperledgerName}
}

export const queryAppointmentsSuccess = (appointments) => {
    return {type: QUERY_APPOINTMENTS_SUCCESS, appointments};
}

export const queryAppointmentsError = (error) => {
    return {type: QUERY_APPOINTMENTS_ERROR, error};
}

export const queryPermission = (phoneNumber) => {
    return {type: QUERY_PERMISSION, phoneNumber}
}

export const queryPermissionSuccess = (permissions) => {
    return {type: QUERY_PERMISSION_SUCCESS, permissions};
}

export const queryPermissionError = (error) => {
    return {type: QUERY_PERMISSION_ERROR, error};
}

export const queryDiagnosisDetail = (hyperledgerName, key) => {
    return {type: QUERY_DIAGNOSIS_DETAIL, hyperledgerName, key};
}

export const queryDiagnosisDetailSuccess = (diagnosisDetail) => {
    return {type: QUERY_DIAGNOSIS_DETAIL_SUCCESS, diagnosisDetail};
}

export const queryDiagnosisDetailError = (error) => {
    return {type: QUERY_DIAGNOSIS_DETAIL_ERROR, error};
}

export const queryAppointmentDetail = (hyperledgerName, key) => {
    return {type: QUERY_APPOINTMENT_DETAIL, hyperledgerName, key};
}

export const queryAppointmentDetailSuccess = (appointmentDetail) => {
    return {type: QUERY_APPOINTMENT_DETAIL_SUCCESS, appointmentDetail};
}

export const queryAppointmentDetailError = (error) => {
    return {type: QUERY_APPOINTMENT_DETAIL_ERROR, error};
}

export const selectItem = (queryType, key) => {
    return {type: SELECT_ITEM, queryType, key};
}

export const addDiagnosis = json => {
    return {type: ADD_DIAGNOSIS, json};
}

export const addDiagnosisSuccess = () => {
    return {type: ADD_DIAGNOSIS_SUCCESS};
}

export const addDiagnosisError = (error) => {
    return {type: ADD_DIAGNOSIS_ERROR, error};
}

export const addAppointment = json => {
    return {type: ADD_APPOINTMENT, json};
}

export const addAppointmentSuccess = () => {
    return {type: ADD_APPOINTMENT_SUCCESS};
}

export const addAppointmentError = (error) => {
    return {type: ADD_APPOINTMENT_ERROR, error};
}

export const clearErrorMess = () => {
    return { type: CLEAR_ERROR_MESS };
}

export const addPermission = (orgHyperledgerName, phoneNumber) => {
    return { type: ADD_PERMISSION, orgHyperledgerName, phoneNumber};
}

export const addPermissionSuccess = () => {
    return { type: ADD_PERMISSION_SUCCESS };
}

export const addPermissionError = (error) => {
    return { type: ADD_PERMISSION_ERROR, error};
}

export const changeMenu = (index) => {
    return { type: CHANGE_MENU, index };
}

export const changeQuery = (query) => {
    return { type: CHANGE_QUERY, query };
}