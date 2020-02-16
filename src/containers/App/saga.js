import { put, takeLatest, all, call, fork } from 'redux-saga/effects'
import { LOGIN, REGISTER, QUERY, QUERY_DIAGNOSIS, QUERY_APPOINTMENTS } from './constants';
import { loginRequest, registerRequest }  from '../../service/AuthRequest';
import {
    loginSuccess, loginError, registerSuccess, registerError, queryError, querySuccess, queryDiagnosisSuccess, queryDiagnosisError, queryAppointmentsSuccess, queryAppointmentsError,
} from './actions';
import { queryRequest, queryDiagnosisRequest, queryAppointmentsRequest } from '../../service/HyperledgerRequest';

// Login
function* doLogin(action) {
    const { userInfo } = action;
    const response = yield call(loginRequest, userInfo);
    if (response.success) {
        const userInfo = response.datas[0];
        yield put(loginSuccess(userInfo));
    } else {
        yield put(loginError(response.errorStatus));
    }
}

function* doLoginWatcher() {
    yield takeLatest(LOGIN, doLogin);
}

// Register
function* doRegister(action) {
    const { registerInfo } = action;
    const response = yield call(registerRequest, registerInfo);
    if (response.success) {
        yield put(registerSuccess());
    } else {
        yield put(registerError(response));
    }
}

function* doRegisterWatcher() {
    yield takeLatest(REGISTER, doRegister);
}

// query

function* doQuery(action) {
    const { hyperledgerName } = action;
    const response = yield call(queryRequest, hyperledgerName);
    if (response.success) {
        const diagnosis = response.datas[0];
        const appointments = response.datas[1];
        yield put(querySuccess(diagnosis, appointments));
    } else {
        yield put(queryError(response.message));
    }
}

function* doQueryWatcher(){
    yield takeLatest(QUERY, doQuery);
}

function* doQueryDiagnosis(action) {
    const { hyperledgerName } = action;
    const response = yield call(queryDiagnosisRequest, hyperledgerName);
    if (response.success) {
        const diagnosis = response.datas[0];
        yield put(queryDiagnosisSuccess(diagnosis));
    } else {
        yield put(queryDiagnosisError(response.message));
    }
}

function* doQueryDiagnosisWatcher(){
    yield takeLatest(QUERY_DIAGNOSIS, doQueryDiagnosis);
}

function* doQueryAppointments(action) {
    const { hyperledgerName } = action;
    const response = yield call(queryAppointmentsRequest, hyperledgerName);
    if (response.success) {
        const appointments = response.datas[0];
        yield put(queryAppointmentsSuccess(appointments));
    } else {
        yield put(queryAppointmentsError(response.message));
    }
}

function* doQueryAppointmentsWatcher(){
    yield takeLatest(QUERY_APPOINTMENTS, doQueryAppointments);
}

export default function* rootSaga() {
    yield all([
        fork(doLoginWatcher),
        fork(doRegisterWatcher),
        fork(doQueryWatcher),
        fork(doQueryDiagnosisWatcher),
        fork(doQueryAppointmentsWatcher),
    ]);
}