import { createSelector } from "reselect"

import {initialState} from './reducer';

const selectGlobal = state => {
    return state.globalReducer || initialState;
};

const selectUserInfo = () => 
    createSelector(
        selectGlobal,
        global => global.userInfo,
    );

const selectUserLoading = () => 
    createSelector(
        selectGlobal,
        global => global.userInfoLoading,
    );

const selectUserErrorStatus = () => 
    createSelector(
        selectGlobal,
        global => global.userInfoErrorStatus,
    );

export {
    selectGlobal,
    selectUserInfo,
    selectUserLoading,
    selectUserErrorStatus,
};