import React from 'react';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from '../../store';
import AppWrapper from './wrapper/appWrapper';
import './styles.scss';

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppWrapper/>
        </ConnectedRouter>
    </Provider>
);

const enhance = compose();
export default enhance(App);
