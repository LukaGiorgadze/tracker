import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { syncTranslationWithStore, loadTranslations } from 'react-redux-i18n';
import { allReducers } from './Reducers/Index';
import { languages } from './I18n';

// Initialize Store
let store = createStore(
	allReducers,
	{},
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

// Set Language
syncTranslationWithStore(store);
store.dispatch(loadTranslations(languages));

// Hot reloading
if(module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('./App', () => {
		const allReducers = require('./Reducers/Index');
		store.replaceReducer(allReducers);
	});
}

// Export browser history
export let history = syncHistoryWithStore(browserHistory, store);

// Export Sotre
export default store;