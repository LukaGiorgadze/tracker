import {
	FETCH_NOTIFICATIONS_START,
	FETCH_NOTIFICATIONS_DONE,
	FETCH_NOTIFICATIONS_ERROR
}
from '../Actions/Types';


let initialState = {
	notificationsList: {
		data: [],
		new: 0,
		loading: false,
		error: null
	}
};


function notifications(state = initialState, action = {}) {
	switch(action.type) {
		case FETCH_NOTIFICATIONS_START: {
			return {
					...state,
					notificationsList: {
						data: [],
						new: 0,
						loading: true
					}
				};
			break;
		}
		case FETCH_NOTIFICATIONS_DONE: {
			return {
					...state,
					notificationsList: {
						data: action.payload,
						new: action.new,
						loading: false
					}
				};
			break;
		}
		default: {
			return state;
		}
	}
}

export default notifications;