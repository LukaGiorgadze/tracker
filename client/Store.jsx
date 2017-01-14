import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { allReducers } from './Reducers/Index';

let store = createStore(
	allReducers,
	{},
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('./App', () => {
		const allReducers = require('./Reducers/Index');
		store.replaceReducer(allReducers);
	});
}

export let history = syncHistoryWithStore(browserHistory, store);

export default store;