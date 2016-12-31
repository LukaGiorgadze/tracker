import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import news from './News';

export let allReducers = combineReducers({
	'news': news,
	'routing': routerReducer
});