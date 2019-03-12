import React from 'react';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import {ConnectedRouter} from 'connected-react-router';
import store, {history, persistor} from '../../store';
import AppWrapper from './wrapper/appWrapper';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';
import './styles.scss';

const App = () => (
    <Provider store={store}>
	    <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
	        <CookiesProvider>
		        <AppWrapper/>
          </CookiesProvider>
        </ConnectedRouter>
	    </PersistGate>
    </Provider>
);

const enhance = compose();
export default enhance(App);
