import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import authReducer from './user/authReduser';
import homeReducer from './home/homeReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    authReducer,
    homeReducer
});

export default rootReducer;
