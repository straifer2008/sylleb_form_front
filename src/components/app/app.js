import React from 'react';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from '../../store';
import AppWrapper from './wrapper/appWrapper';
import {CookiesProvider, withCookies} from 'react-cookie';
import {PersistGate} from 'redux-persist/lib/integration/react';
import './styles.scss';
import Loader from '../loader/loader';

const {store, persistor} = configureStore();

const App = () => (
	<div className='wrap'>
		<Provider store={store}>
			<PersistGate loading={<Loader/>} persistor={persistor}>
				<ConnectedRouter history={history}>
					<CookiesProvider>
						<AppWrapper/>
					</CookiesProvider>
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	</div>
);

const enhance = compose(
	withCookies
);
export default enhance(App);
