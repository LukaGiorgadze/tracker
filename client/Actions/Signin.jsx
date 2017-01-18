import {
	SIGNIN_START,
	SIGNIN_DONE,
	SIGNIN_ERROR,
	SET_CURRENT_USER
}
from '../Actions/Types';
import jwtDecode from 'jwt-decode';
import { api, setAuthToken }from '../Middleware/Axios';

// Default sign in action
export function setCurrentUser(user = {}) {
	return {
		type: SET_CURRENT_USER,
		isAuthenticated: user.isAuthenticated,
		data: user.data
	}
}

// User Sign in action
export function signin(data) {
	return dispatch => {
		dispatch({
			type: SIGNIN_START
		});
		return api.post('/signin', data)
			.then(function (res) {
				dispatch({
					type: SIGNIN_DONE
				});
				dispatch(setCurrentUser({
					data: jwtDecode(res.data.token),
					isAuthenticated: true
				}));
				if(data.remember) {
					localStorage.setItem('jwtToken', res.data.token);
				} else {
					sessionStorage.setItem('jwtToken', res.data.token);
				}
				setAuthToken(res.data.token);
				return true;
			})
			.catch(function (err) {
				let error = 'UNKNOWN_ERROR';
				if(typeof err.response !== 'undefined') {
					error = err.response.data.error;
				} else if(typeof err.code !== 'undefined') {
					error = err.code;
				}
				dispatch({
					type: SIGNIN_ERROR,
					payload: error
				});
				throw new Error(err);
			});
	};
}