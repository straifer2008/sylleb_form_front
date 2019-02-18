import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './components';
import './utils/styles/defaultStyles.scss'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
