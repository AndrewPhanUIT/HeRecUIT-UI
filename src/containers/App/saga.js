import {put, takeLatest, all, call, fork} from 'redux-saga/effects'
import {
    LOGIN,
    REGISTER,
    QUERY,
    QUERY_DIAGNOSIS,
    QUERY_APPOINTMENTS,
    QUERY_PERMISSION,
    QUERY_DIAGNOSIS_DETAIL,
    QUERY_APPOINTMENT_DETAIL,
} from './constants';
import {loginRequest, registerRequest} from '../../service/AuthRequest';
import {
    loginSuccess,
    loginError,
    registerSuccess,
    registerError,
    queryError,
    querySuccess,
    queryDiagnosisSuccess,
    queryDiagnosisError,
    queryAppointmentsSuccess,
    queryAppointmentsError,
    queryPermissionSuccess,
    queryPermissionError,
    queryDiagnosisDetailSuccess, queryDiagnosisDetailError,
    queryAppointmentDetailSuccess, queryAppointmentDetailError,
} from './actions';
import {queryRequest, queryDiagnosisRequest, queryAppointmentsRequest, queryPermissionRequest, queryAppointmentDetailRequest, queryDiagnosisDetailRequest} from '../../service/HyperledgerRequest';

// Login
function * doLogin(action) {
    const {userInfo} = action;
    const response = yield call(loginRequest, userInfo);
    if (response.success) {
        const userInfo = response.datas[0];
        yield put(loginSuccess(userInfo));
    } else {
        yield put(loginError(response.errorStatus));
    }
}

function * doLoginWatcher() {
    yield takeLatest(LOGIN, doLogin);
}

// Register
function * doRegister(action) {
    const {registerInfo} = action;
    const response = yield call(registerRequest, registerInfo);
    if (response.success) {
        yield put(registerSuccess());
    } else {
        yield put(registerError(response));
    }
}

function * doRegisterWatcher() {
    yield takeLatest(REGISTER, doRegister);
}

// query

function * doQuery(action) {
    const {hyperledgerName} = action;
    const response = yield call(queryRequest, hyperledgerName);
    if (response.success) {
        const diagnosis = response.datas[0];
        const appointments = response.datas[1];
        yield put(querySuccess(diagnosis, appointments));
    } else {
        yield put(queryError(response.message));
    }
}

function * doQueryWatcher() {
    yield takeLatest(QUERY, doQuery);
}

function * doQueryDiagnosis(action) {
    const {hyperledgerName} = action;
    const response = yield call(queryDiagnosisRequest, hyperledgerName);
    if (response.success) {
        const diagnosis = response.datas[0];
        yield put(queryDiagnosisSuccess(diagnosis));
    } else {
        yield put(queryDiagnosisError(response.message));
    }
}

function * doQueryDiagnosisWatcher() {
    yield takeLatest(QUERY_DIAGNOSIS, doQueryDiagnosis);
}

function * doQueryAppointments(action) {
    const {hyperledgerName} = action;
    const response = yield call(queryAppointmentsRequest, hyperledgerName);
    if (response.success) {
        const appointments = response.datas[0];
        yield put(queryAppointmentsSuccess(appointments));
    } else {
        yield put(queryAppointmentsError(response.message));
    }
}

function * doQueryAppointmentsWatcher() {
    yield takeLatest(QUERY_APPOINTMENTS, doQueryAppointments);
}

function * doQueryPermission(action) {
    const {phoneNumber} = action;
    const response = yield call(queryPermissionRequest, phoneNumber);
    if (response.success) {
        const permission = response.datas[0];
        yield put(queryPermissionSuccess(permission));
    } else {
        yield put(queryPermissionError(response.message));
    }
}

function * doQueryPermissionWatcher() {
    yield takeLatest(QUERY_PERMISSION, doQueryPermission);
}

function * doQueryDiagnosisDetail(action) {
    const {hyperledgerName, key} = action;
    const response = yield call(queryDiagnosisDetailRequest, hyperledgerName,key);
    if (response.success) {
        const diagnosiDetail = response.datas[0];
        yield put(queryDiagnosisDetailSuccess(diagnosiDetail));
    } else {
        yield put(queryDiagnosisDetailError(response.message));
    }
}

function * doQueryDiagnosisDetailWatcher() {
    yield takeLatest(QUERY_DIAGNOSIS_DETAIL, doQueryDiagnosisDetail);
}

function * doQueryAppointmentDetail(action) {
    const {hyperledgerName, key} = action;
    const response = yield call(queryAppointmentDetailRequest, hyperledgerName,key);
    if (response.success) {
        const diagnosiDetail = response.datas[0];
        yield put(queryAppointmentDetailSuccess(diagnosiDetail));
    } else {
        yield put(queryAppointmentDetailError(response.message));
    }
}

function * doQueryAppointmentDetailWatcher() {
    yield takeLatest(QUERY_APPOINTMENT_DETAIL, doQueryAppointmentDetail);
}

export default function * rootSaga() {
    yield all([
        fork(doLoginWatcher),
        fork(doRegisterWatcher),
        fork(doQueryWatcher),
        fork(doQueryDiagnosisWatcher),
        fork(doQueryAppointmentsWatcher),
        fork(doQueryPermissionWatcher),
        fork(doQueryDiagnosisDetailWatcher),
        fork(doQueryAppointmentDetailWatcher),
    ]);
}