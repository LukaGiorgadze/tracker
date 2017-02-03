'use strict';
import { browserHistory } from 'react-router';
import config from './Config';
import store from './Store';
import { setCurrentUser } from './Actions/Signin';
import { setAuthToken } from './Middleware/Axios';

export function link(url) {
	let _url = config.baseUrl + url.replace(/^\/|\/$/g, '');
	return browserHistory.push(_url);
}

export function autoResizeInput(e) {
	let o = e.target;
	setTimeout(function(){
		o.style.height = "auto";
		o.style.height = (o.scrollHeight)+"px";
	},0);
	return o.value.length;
}

export function signout() {
	store.dispatch(setCurrentUser({
		data: {},
		isAuthenticated: false
	}));
	localStorage.removeItem('jwtToken');
	sessionStorage.removeItem('jwtToken');
	setAuthToken(false);
	link('/');
}