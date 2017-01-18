import {
	SIGNIN_START,
	SIGNIN_DONE,
	SIGNIN_ERROR,
	SET_CURRENT_USER
}
from '../Actions/Types';


let initialState = {
	loading: false,
	isAuthenticated: false,
	data: null,
	error: null
};


function signin(state = initialState, action = {}) {
	switch(action.type) {
		case SIGNIN_START: {
			return {
					...state,
					loading: true
				};
		}
		case SIGNIN_DONE: {
			return {
				...state,
				loading: false
			};
		}
		case SIGNIN_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload
			};
		}
		case SET_CURRENT_USER: {
			return {
				...state,
				loading: false,
				isAuthenticated: action.isAuthenticated,
				data: action.data
			};
		}
		default: {
			return state;
		}
	}
}

export default signin;