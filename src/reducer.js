import { combineReducers } from "redux";
import globalReducer from './containers/App/reducer';

const createReducer = () => 
    combineReducers({
        global: globalReducer
    });

export default createReducer;