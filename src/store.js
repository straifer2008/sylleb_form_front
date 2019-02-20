import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './state';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducers(history),
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
