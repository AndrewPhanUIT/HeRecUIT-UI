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
    ADD_APPOINTMENT,
    ADD_DIAGNOSIS,
    ADD_PERMISSION,
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
    queryAppointmentDetailSuccess, queryAppointmentDetailError, addDiagnosisError, addAppointmentError, addAppointmentSuccess, addDiagnosisSuccess,
    addPermissionSuccess,
    addPermissionError,
} from './actions';
import {queryRequest, queryDiagnosisRequest, queryAppointmentsRequest, queryPermissionRequest, queryAppointmentDetailRequest, queryDiagnosisDetailRequest, addNewDiagnosisRequest, addNewAppointmentRequest, addPermissionRequest} from '../../service/HyperledgerRequest';

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

function * doAddDiagnosis(action) {
    const { json } = action;
    const response = yield call(addNewDiagnosisRequest, json);
    if (response.success) {
        yield put(addDiagnosisSuccess());
    } else {
        if (response.errorStatus === 400) {
            yield put(addDiagnosisError("Tổ chức chưa được phân quyền cập nhật trạng thái của bệnh nhân. Vui lòng liên hệ admin!"));
        } else {
            yield put(addDiagnosisError(response.message));
        }
    }
}

function * doAddDiagnosisWatcher() {
    yield takeLatest(ADD_DIAGNOSIS, doAddDiagnosis);
}

function * doAddAppointment(action) {
    const { json } = action;
    const response = yield call(addNewAppointmentRequest, json);
    if (response.success) {
        yield put(addAppointmentSuccess());
    } else {
        if (response.errorStatus === 400) {
            yield put(addAppointmentError("Tổ chức chưa được phân quyền cập nhật trạng thái của bệnh nhân. Vui lòng liên hệ admin!"));
        } else if (response.errorStatus === 500) {
            yield put(addAppointmentError("Có lỗi xảy ra. Vui lòng liên hệ admin!"));
        } else {
            yield put(addAppointmentError(response.message));
        }
    }
}

function * doAddAppointmentWatcher() {
    yield takeLatest(ADD_APPOINTMENT, doAddAppointment);
}

function * doAddPermission(action) {
    const { orgHyperledgerName, phoneNumber } = action;
    const permissionForm = { orgHyperledgerName, phoneNumber };
    const response = yield call(addPermissionRequest, permissionForm);
    if (response.success) {
        yield put(addPermissionSuccess());
    } else {
        if (response.errorStatus === 400) {
            yield put(addPermissionError("Có lỗi xảy ra. Vui lòng liên hệ admin!"));
        } else {
            yield put(addAppointmentError(response.message));
        }
    }
}

function * doAddPermissionWathcer() {
    yield takeLatest(ADD_PERMISSION, doAddPermission);
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
        fork(doAddDiagnosisWatcher),
        fork(doAddAppointmentWatcher),
        fork(doAddPermissionWathcer),
    ]);
}