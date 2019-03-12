import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import authReducer from './user/authReduser';
import homeReducer from './home/homeReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfig = {
	key: 'user',
	storage,
	whitelist: ['user']
};

const rootReducer = history => combineReducers({
	router: connectRouter(history),
	authReducer: persistReducer(persistConfig, authReducer),
	homeReducer
});

export default rootReducer;
