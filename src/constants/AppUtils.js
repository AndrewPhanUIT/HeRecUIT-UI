import {ACCESS_TOKEN, MONTH_NAME} from './../constants/constants';

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    if(sessionStorage.getItem(ACCESS_TOKEN)){
        headers.append('Authorization', 'TopFactors ', sessionStorage.getItem(ACCESS_TOKEN));
    }

    let defaults = {headers};
    options = Object.assign({}, defaults, options);
    
    console.log(options);

    return fetch(options.url, options)
        .then(res => res.json().then(json => {
            if(!res.ok){
                return Promise.reject(json);
            }

            return json;
        }));
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