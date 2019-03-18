import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import createBrowserHistory from 'history/createBrowserHistory';
import Thunk from 'redux-thunk';
import rootReducer from './state';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'permissions',
	storage: storage,
	debug: false,
	whitelist: ['permissions'],
};
const history = createBrowserHistory();
const persistentReducers = persistReducer(persistConfig, rootReducer(history));
export {
	history,
};

export default () => {
	const store = createStore(
		persistentReducers,
		{},
		composeWithDevTools(
			applyMiddleware(
				Thunk,
				createLogger(),
				routerMiddleware(history)
			),
		),
	);
	const persistor = persistStore(store);
	return { store, persistor };
};
