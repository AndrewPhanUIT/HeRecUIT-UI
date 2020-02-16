import {request} from '../constants/AppUtils';
import {API_PUBLIC_URL, API_BASE_URL} from '../constants/ApiConstants';

export const queryRequest = (hyperledgerName) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.query + hyperledgerName,
        method: 'GET',
        body: '',
    });
    return resp;
}

export const queryDiagnosisRequest = (hyperledgerName) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.queryDiagnosis + hyperledgerName,
        method: 'GET',
        body: '',
    });
    return resp;
}

export const queryAppointmentsRequest = (hyperledgerName) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.queryAppointments + hyperledgerName,
        method: 'GET',
        body: '',
    });
    return resp;
}