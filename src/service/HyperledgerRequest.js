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

export const queryPermissionRequest = (phoneNumber) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.queryPermission + phoneNumber,
        method: 'GET',
        body: '',
    });
    return resp;
}

export const queryDiagnosisDetailRequest = (hyperledgerName, key) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.queryDiagnosisDetail + `hyperledgerName=${hyperledgerName}&key=${key}`,
        method: 'GET',
        body: '',
    });
    return resp;
}

export const queryAppointmentDetailRequest = (hyperledgerName, key) => {
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.queryAppointmentDetail + `hyperledgerName=${hyperledgerName}&key=${key}`,
        method: 'GET',
        body: '',
    });
    return resp;
}

export const addNewDiagnosisRequest = json => {
    let tempJson = JSON.stringify(json) + "";
    let temp = tempJson.replace(/\\n\s*/g, '');
    temp = temp.replace(/\\t\s*/g, '');
    temp = temp.replace(/\\"\s*/g, '"');
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.addNewDiagnosis,
        method: 'POST',
        body: temp,
    });
    return resp;
}

export const addNewAppointmentRequest = json => {
    let tempJson = JSON.stringify(json) + "";
    let temp = tempJson.replace(/\\n\s*/g, '');
    temp = temp.replace(/\\"\s*/g, '"');
    const resp = request({
        url: API_BASE_URL + API_PUBLIC_URL.addNewAppointment,
        method: 'POST',
        body: temp,
    });
    return resp;
}

export const addPermissionRequest = (permissionForm) => {
    return request({
        url: API_BASE_URL + API_PUBLIC_URL.addPermission,
        method: 'PUT',
        body: JSON.stringify(permissionForm)
    });
}