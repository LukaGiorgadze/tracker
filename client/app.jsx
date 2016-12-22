// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import store, { history } from './Store';
import routes from './Routes';

// Static media files
require('./Static/css/larisome.css');
require('./Static/css/main.css');

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