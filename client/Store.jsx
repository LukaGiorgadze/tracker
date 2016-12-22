import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import news from './Reducers/News';

let allReducers = combineReducers({
	news,
	routing: routerReducer
});


let store = createStore(
	allReducers,
	{},
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);


export let history = syncHistoryWithStore(browserHistory, store);

export default store;