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
import _ from 'lodash';
import { dataNotifications, dataNotificationsN } from '../Data';

// Fetch Notification Items
export function fetchNotifications() {
	return dispatch => {
		dispatch({
			type: FETCH_NOTIFICATIONS_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_NOTIFICATIONS_DONE,
				payload: _.mapKeys(dataNotifications, '_id')
			});
		}, 200);
	};
}

// Fetch Notification Number
export function fetchNotificationsN() {
	return dispatch => {
		dispatch({
			type: FETCH_NOTIFICATIONS_N_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_NOTIFICATIONS_N_DONE,
				payload: dataNotificationsN
			});
		}, 200);
	};
}

// View Notifications and Clear Notification Number
export function viewNotifications() {
	return dispatch => {
		dispatch({
			type: VIEW_NOTIFICATIONS_START
		});
		setTimeout(() => {
			dispatch({
				type: VIEW_NOTIFICATIONS_DONE,
				payload: 0
			});
		}, 200);
	};
}