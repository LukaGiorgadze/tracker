import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
import posts from './Posts';
import notifications from './Notifications';
import signin from './Signin';

export let allReducers = combineReducers({
	'posts': posts,
	'notifications': notifications,
	'user': signin,
	'i18n': i18nReducer,
	'routing': routerReducer
});