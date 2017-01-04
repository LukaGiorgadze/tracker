import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import news from './News';
import notifications from './Notifications';

export let allReducers = combineReducers({
	'news': news,
	'notifications': notifications,
	'routing': routerReducer
});