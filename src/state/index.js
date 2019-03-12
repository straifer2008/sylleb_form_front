import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import authReducer from './user/authReduser';
import homeReducer from './home/homeReducer';
import permissionsReducer from './permissions/permissionsReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfigAuth = {
	key: 'user',
	storage,
	whitelist: ['user']
};
const persistConfigPermissions = {
	key: 'permissions',
	storage,
};

const rootReducer = history => combineReducers({
	router: connectRouter(history),
	authReducer: persistReducer(persistConfigAuth, authReducer),
	permissions: persistReducer(persistConfigPermissions, permissionsReducer),
	homeReducer
});

export default rootReducer;
