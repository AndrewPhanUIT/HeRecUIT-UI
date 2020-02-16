export const LOGIN = "herec/login";
export const LOGIN_SUCCESS = "herec/login_success";
export const LOGIN_ERROR = "herec/login_error";

export const REGISTER = "herec/REGISTER";
export const REGISTER_SUCCESS = "herec/REGISTER_SUCCESS";
export const REGISTER_ERROR = "herec/REGISTER_ERROR";


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