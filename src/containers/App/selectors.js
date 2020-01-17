import { createSelector } from "reselect"

import {initialState} from './reducer';

const selectGlobal = () => state => state.global || initialState;

const makeUserInfoSelector = () => 
    createSelector(
        selectGlobal,
        globalState => globalState.userInfo
    );

export {
    selectGlobal,
    makeUserInfoSelector
}