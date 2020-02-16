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
    QUERY_APPOINTMENTS_ERROR
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