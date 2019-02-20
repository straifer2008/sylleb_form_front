import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './components';
import './utils/styles/defaultStyles.scss'
import store, {history} from "./store";
import {ConnectedRouter} from "connected-react-router";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
