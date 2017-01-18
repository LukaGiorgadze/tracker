// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './Store';
import routes from './Routes';
import jwtDecode from 'jwt-decode';
import { setLocale } from 'react-redux-i18n';
import { setAuthToken }from './Middleware/Axios';
import { setCurrentUser }from './Actions/Signin';

// Static media files
require('./Static/css/larisome.css');
require('./Static/css/main.css');

// JSON Web Token - User initialization
const jwtToken = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');
if(jwtToken) {
	setAuthToken(jwtToken);
	store.dispatch(setCurrentUser({
		isAuthenticated: true,
		data: jwtDecode(jwtToken)
	}));
}

// Set Language
const language = localStorage.getItem('language') || 'en';
store.dispatch(setLocale(language));

// App
render(
	<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
	</Provider>,
	document.querySelector("#app")
);

// Hot Reloading
if(module.hot) {
	module.hot.accept();
}