import {
	SIGNIN_START,
	SIGNIN_DONE,
	SIGNIN_ERROR
}
from '../Actions/Types';
import api from '../Middleware/Axios';

// Fetch Notification Number
export function signin(data) {
	return dispatch => {
		dispatch({
			type: SIGNIN_START
		});
		return api.post('/signin', data)
			.then(function (response) {
				dispatch({
					type: SIGNIN_DONE,
					payload: response.data
				});
				return response.data;
			})
			.catch(function (error) {
				dispatch({
					type: SIGNIN_ERROR,
					payload: error.data
				});
				throw new Error(error.data);
			});
	};
}