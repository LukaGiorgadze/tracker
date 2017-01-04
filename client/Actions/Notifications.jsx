import {
	FETCH_NOTIFICATIONS_START,
	FETCH_NOTIFICATIONS_DONE,
	FETCH_NOTIFICATIONS_ERROR
}
from '../Actions/Types';
import _ from 'lodash';
import { dataNotifications } from '../Data';


// Fetch News Items
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
		}, 500);
	};
}