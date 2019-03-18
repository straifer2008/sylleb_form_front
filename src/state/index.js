import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import authReducer from './auth/authReduser';
import userReducer from './user/userReducer';
import { reducer as permissions } from 'react-redux-permissions'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistconfog = {
	key: 'auth',
	debug: false,
	storage
};

const userPersistCongig = {
	key: 'user',
	debug: false,
	storage
};


const rootReducer = history => combineReducers({
	router: connectRouter(history),
	permissions,
	auth: persistReducer(authPersistconfog, authReducer),
	user: persistReducer(userPersistCongig, userReducer),
});

export default rootReducer;
