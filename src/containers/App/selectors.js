import {createSelector} from "reselect"

import {initialState} from './reducer';

const selectGlobal = state => {
    return state.globalReducer || initialState;
};

const selectUserInfo = () => createSelector(selectGlobal, global => global.userInfo,);

const selectUserLoading = () => createSelector(selectGlobal, global => global.userInfoLoading,);

const selectUserErrorStatus = () => createSelector(selectGlobal, global => global.userInfoErrorStatus,);

const selectDiagnosis = () => createSelector(selectGlobal, global => global.diagnosis,);

const selectDiagnosisLoading = () => createSelector(selectGlobal, global => global.diagnosisLoading,);

const selectAppointments = () => createSelector(selectGlobal, global => global.appointments,);

const selectAppointmentsLoading = () => createSelector(selectGlobal, global => global.appointmentsLoading,);

const selectPermission = () => createSelector(selectGlobal, global => global.permissions,);

const selectPermissionLoading = () => createSelector(selectGlobal, global => global.permissionsLoading,);

const selectDiagnosisDetail = () => createSelector(selectGlobal, global => global.diagnosisDetail,);

const selectDiagnosisDetailLoading = () => createSelector(selectGlobal, global => global.diagnosisDetailLoading,);

const selectAppointmentDetail = () => createSelector(selectGlobal, global => global.appointmentDetail,);

const selectAppointmentDetailLoading = () => createSelector(selectGlobal, global => global.appointmentDetailLoading,);

const selectSelectedItem = () => createSelector(selectGlobal, global => global.selectedItem,);

const selectError = () => createSelector(selectGlobal, global => global.error,);

const selectLoadingAddNewRecord = () => createSelector(selectGlobal, global => global.loadingAddNewRecord,);

const selectLoadingAddPermission = () => createSelector(selectGlobal, global => global.loadingAddPermission,);

const selectMenuIndex = () => createSelector(selectGlobal, global => global.menuIndex,);

const selectQuery = () => createSelector(selectGlobal, global => global.query,);

export {
    selectGlobal,
    selectUserInfo,
    selectUserLoading,
    selectUserErrorStatus,
    selectDiagnosis,
    selectDiagnosisLoading,
    selectAppointments,
    selectAppointmentsLoading,
    selectPermission,
    selectPermissionLoading,
    selectDiagnosisDetail,
    selectDiagnosisDetailLoading,
    selectAppointmentDetail,
    selectAppointmentDetailLoading,
    selectSelectedItem,
    selectError,
    selectLoadingAddNewRecord,
    selectLoadingAddPermission,
    selectMenuIndex,
    selectQuery,
};