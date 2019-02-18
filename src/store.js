import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './state';

// import { sagasManager } from './utils';
// import createSagaMiddleware from 'redux-saga';
// import { requestApi } from './utils/middlewares/sagaRequestApi';
// const sagaMiddleware = createSagaMiddleware();


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

// sagaMiddleware.run(sagasManager.getRootSaga());

export default store;
