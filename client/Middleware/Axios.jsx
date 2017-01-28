import axios from 'axios';
import config from '../Config';
require('es6-promise').polyfill();

export const api = axios.create({
	baseURL: config.APIUrl,
	timeout: 1000,
	withCredentials: false,
	responseType: 'json',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

export const setAuthToken = (token) => {
	if(token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete api.defaults.headers.common['Authorization'];
	}
};


export default api;