import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './Posts';
import notifications from './Notifications';
import signin from './Signin';

export let allReducers = combineReducers({
	'posts': posts,
	'notifications': notifications,
	'signin': signin,
	'routing': routerReducer
});