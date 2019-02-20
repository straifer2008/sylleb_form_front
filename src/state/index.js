import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import authReducer from "./user/authReduser";

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    authReducer
});

export default rootReducer;
