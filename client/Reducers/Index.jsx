import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './Posts';
import notifications from './Notifications';

export let allReducers = combineReducers({
	'posts': posts,
	'notifications': notifications,
	'routing': routerReducer
});