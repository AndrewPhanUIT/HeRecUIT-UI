import produce from "immer"

import {LOGIN} from './constants';

export const initialState = {
    loading: false,
    error: false,
    userInfo: {
        userName: '',
        authorization: '',
        loginDate: Date.now
    }
}

const globalState = (state = initialState, action) => {
    produce(state, draft => {
        switch(action.type){
            case LOGIN:
                draft.loading = true;
                draft.error = false;
                draft.userInfo = null;
                break;
            default: 
                break;
        }
    })
}

export default globalState;