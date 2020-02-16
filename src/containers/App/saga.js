import { put, takeLatest, all, call, fork } from 'redux-saga/effects'
import { LOGIN, REGISTER } from './constants';
import { loginRequest, registerRequest }  from '../../service/AuthRequest';
import {
    loginSuccess, loginError, registerSuccess, registerError,
} from './actions';

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

export default function* rootSaga() {
    yield all([
        fork(doLoginWatcher),
        fork(doRegisterWatcher),
    ]);
}