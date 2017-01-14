import {
	SIGNIN_START,
	SIGNIN_DONE,
	SIGNIN_ERROR
}
from '../Actions/Types';


let initialState = {
	loading: false,
	data: null
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
				loading: false,
				data: action.payload
			};
		}
		default: {
			return state;
		}
	}
}

export default signin;