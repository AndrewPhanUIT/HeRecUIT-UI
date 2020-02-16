import { combineReducers } from "redux";
import globalReducer from './containers/App/reducer';

const rootReducer = combineReducers({
    globalReducer,
});

export default rootReducer;