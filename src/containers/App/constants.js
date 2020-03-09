export const LOGIN = "herec/login";
export const LOGIN_SUCCESS = "herec/login_success";
export const LOGIN_ERROR = "herec/login_error";

export const REGISTER = "herec/REGISTER";
export const REGISTER_SUCCESS = "herec/REGISTER_SUCCESS";
export const REGISTER_ERROR = "herec/REGISTER_ERROR";

export const QUERY = "herec/QUERY";
export const QUERY_SUCCESS = "herec/QUERY_SUCCESS";
export const QUERY_ERROR = "herec/QUERY_ERROR";

export const QUERY_DIAGNOSIS = "herec/QUERY_DIAGNOSIS";
export const QUERY_DIAGNOSIS_SUCCESS = "herec/QUERY_DIAGNOSIS_SUCCESS";
export const QUERY_DIAGNOSIS_ERROR = "herec/QUERY_DIAGNOSIS_ERROR";

export const QUERY_APPOINTMENTS = "herec/QUERY_APPOINTMENTS";
export const QUERY_APPOINTMENTS_SUCCESS = "herec/QUERY_APPOINTMENTS_SUCCESS";
export const QUERY_APPOINTMENTS_ERROR = "herec/QUERY_APPOINTMENTS_ERROR";

export const QUERY_PERMISSION = "herec/QUERY_PERMISSION";
export const QUERY_PERMISSION_SUCCESS = "herec/QUERY_PERMISSION_SUCCESS";
export const QUERY_PERMISSION_ERROR = "herec/QUERY_PERMISSION_ERROR";

export const QUERY_DIAGNOSIS_DETAIL = "herec/QUERY_DIAGNOSIS_DETAIL";
export const QUERY_DIAGNOSIS_DETAIL_SUCCESS = "herec/QUERY_DIAGNOSIS_DETAIL_SUCCESS";
export const QUERY_DIAGNOSIS_DETAIL_ERROR = "herec/QUERY_DIAGNOSIS_DETAIL_ERROR";

export const QUERY_APPOINTMENT_DETAIL = "herec/QUERY_APPOINTMENT_DETAIL";
export const QUERY_APPOINTMENT_DETAIL_SUCCESS = "herec/QUERY_APPOINTMENT_DETAIL_SUCCESS";
export const QUERY_APPOINTMENT_DETAIL_ERROR = "herec/QUERY_APPOINTMENT_DETAIL_ERROR";

export const SELECT_ITEM = "herec/SELECT_ITEM";

export const ADD_DIAGNOSIS = "herec/ADD_DIAGNOSIS";
export const ADD_DIAGNOSIS_SUCCESS = "herec/ADD_DIAGNOSIS_SUCCESS";
export const ADD_DIAGNOSIS_ERROR = "herec/ADD_DIAGNOSIS_ERROR";

export const ADD_APPOINTMENT = "herec/ADD_APPOINTMENT";
export const ADD_APPOINTMENT_SUCCESS = "herec/ADD_APPOINTMENT_SUCCESS";
export const ADD_APPOINTMENT_ERROR = "herec/ADD_APPOINTMENT_ERROR";

export const ADD_PERMISSION = "herec/ADD_PERMISSION";
export const ADD_PERMISSION_SUCCESS = "herec/ADD_PERMISSION_SUCCESS";
export const ADD_PERMISSION_ERROR = "herec/ADD_PERMISSION_ERROR";

export const CLEAR_ERROR_MESS = "herec/CLEAR_ERROR_MESS";

export const CHANGE_MENU = "herec/CHANGE_MENU";

export const CHANGE_QUERY = "herec/CHANGE_QUERY";

export const REGEX = {
    email: /^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,20})/,
    username: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,15})/
}


export const PATIENT_MENU = [
    {
        key: 1,
        iconType: 'ordered-list',
        title: 'Tóm tắt',
        link: '/patient-info'
    }, {
        key: 2,
        iconType: 'calendar',
        title: 'Lịch hẹn',
        link: ''
    },{
        key: 3,
        iconType: 'container',
        title: 'Kết quả khám bệnh',
        link: ''
    },{
        key: 4,
        iconType: 'key',
        title: 'Phân quyền',
        link: '/permission'
    }
];