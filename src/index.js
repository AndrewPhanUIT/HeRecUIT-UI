import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import App from './containers/App';
import rootReducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={createStore(rootReducer)}>
		<App/>
	</Provider>
, document.getElementById('root'));

serviceWorker.register();
