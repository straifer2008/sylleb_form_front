import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import rootReducer from './state';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            thunk,
            epicMiddleware,
            createLogger(),
            routerMiddleware(history)
        ),
    ),
);

export default store;
