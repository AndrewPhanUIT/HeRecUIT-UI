import {ACCESS_TOKEN, MONTH_NAME, TOKEN_TYPE} from './../constants/constants';
import { QUAN12_DIAGNOSIS, QUAN12_APPOINTMENT, TANPHU_DIAGNOSIS, TANPHU_APPOINTMENT } from '../mockup';

export const request = (options) => {
    let headers = {
        'Content-Type': 'application/json'
    };

    if(sessionStorage.getItem(ACCESS_TOKEN)){
        headers = {
            ...headers,
            "Authorization": TOKEN_TYPE + sessionStorage.getItem(ACCESS_TOKEN),
        };
    }

    let defaults = {headers};
    options = { ...defaults, ...options};

    if (options.method === 'GET') {
        return fetch(options.url, {
            headers
        }).then(res => {
                if(res.ok) {
                    return res.json();
                }
                return {
                    errorStatus: res.status,
                };
            }).catch(err => ({errorStatus: err.status}))
    }

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
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    var dt = new Date(dateString.replace(pattern,'$1-$2-$3'));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}

export const isExpired = (dateString) => {
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    var dt = new Date(dateString.replace(pattern,'$1-$2-$3'));

    var curDate = new Date();
    if(curDate.getTime() > dt.getTime()) {
        return true;
    }
    return false;
}

export const diffDay = (startDate, endDate) => {
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    var day1 = new Date(startDate.replace(pattern,'$1-$2-$3'));
    var day2 = new Date(endDate.replace(pattern,'$1-$2-$3'));
    return (day2.getTime() - day1.getTime()) / (1000 * 3600 * 24);
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