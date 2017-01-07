import {
	FETCH_NOTIFICATIONS_START,
	FETCH_NOTIFICATIONS_DONE,
	FETCH_NOTIFICATIONS_ERROR,
	FETCH_NOTIFICATIONS_N_START,
	FETCH_NOTIFICATIONS_N_DONE,
	FETCH_NOTIFICATIONS_N_ERROR,
	VIEW_NOTIFICATIONS_START,
	VIEW_NOTIFICATIONS_DONE,
	VIEW_NOTIFICATIONS_ERROR
}
from '../Actions/Types';


let initialState = {
	notificationsList: {
		data: [],
		loading: false,
		error: null
	},
	notificationsN: 0
};


function notifications(state = initialState, action = {}) {
	switch(action.type) {
		case FETCH_NOTIFICATIONS_START: {
			return {
					...state,
					notificationsList: {
						data: [],
						loading: true
					}
				};
		}
		case FETCH_NOTIFICATIONS_DONE: {
			return {
					...state,
					notificationsList: {
						data: action.payload,
						loading: false
					}
				};
		}
		case FETCH_NOTIFICATIONS_N_START: {
			return {
				...state,
				notificationsN: 0
			};
		}
		case FETCH_NOTIFICATIONS_N_DONE: {
			return {
				...state,
				notificationsN: action.payload
			};
		}
		case VIEW_NOTIFICATIONS_START: {
			return state;
		}
		case VIEW_NOTIFICATIONS_DONE: {
			return {
				...state,
				notificationsN: action.payload
			};
		}
		default: {
			return state;
		}
	}
}

export default notifications;