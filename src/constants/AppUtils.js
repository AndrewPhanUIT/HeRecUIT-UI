import {ACCESS_TOKEN, MONTH_NAME, TOKEN_TYPE} from './../constants/constants';
import { QUAN12_DIAGNOSIS, QUAN12_APPOINTMENT, TANPHU_DIAGNOSIS, TANPHU_APPOINTMENT } from '../mockup';

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    if(sessionStorage.getItem(ACCESS_TOKEN)){
        headers.append('Authorization',  TOKEN_TYPE , sessionStorage.getItem(ACCESS_TOKEN));
    }

    let defaults = {headers};
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return {
                errorStatus: res.status
            };
        }).catch(err => ({errorStatus: err.status}));
}


export const formatDate = (dateString) => {
    let date = new Date(dateString);
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return MONTH_NAME[monthIndex] + ' ' + year;
}

export const formatDateTime = (dateTimeString) => {
    let date = new Date(dateTimeString);
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return date.getDate() + ' ' + MONTH_NAME[monthIndex] + ' ' + year + ' - ' + date.getHours() + ':' + date.getMinutes();
}

export const mapMenuKeyToUrlParam = (key) => {
    return key === 1 ? '/patient-info' :
        key === 2 ? '/patient-info/appointment' :
        key === 3 ? '/patient-info/diagnosis' :
        key === 4 ? '/permission' : '';
}

export const mapOrgTypeWithData = (org, type) => {
    return org === 'quan12' && type === 'diagnosis' ? QUAN12_DIAGNOSIS :
        org === 'tanphu' && type === 'diagnosis' ? TANPHU_DIAGNOSIS :
        org === 'quan12' && type === 'appointment' ? QUAN12_APPOINTMENT :
        org === 'tanphu' && type === 'appointment' ? TANPHU_APPOINTMENT : '';
}