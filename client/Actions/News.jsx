import {
	FETCH_NEWS_ITEMS_START,
	FETCH_NEWS_ITEMS_DONE,
	FETCH_NEWS_ITEMS_ERROR,
	FETCH_NEWS_ITEM_START,
	FETCH_NEWS_ITEM_DONE,
	FETCH_NEWS_ITEM_ERROR,
	FETCH_NEWS_COMMENTS_START,
	FETCH_NEWS_COMMENTS_DONE,
	FETCH_NEWS_COMMENTS_ERROR
}
from '../Actions/Types';
import _ from 'lodash';
import { dataNews, dataComments } from '../Data';


// Fetch News Items
export function fetchNewsItems() {
	return dispatch => {
		dispatch({
			type: FETCH_NEWS_ITEMS_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_NEWS_ITEMS_DONE,
				payload: _.mapKeys(dataNews, '_id')
			});
		}, 500);
	};
}

// Fetch One News Item
export function fetchNewsItem(id) {
	return dispatch => {
		dispatch({
			type: FETCH_NEWS_ITEM_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_NEWS_ITEM_DONE,
				payload: _.mapKeys(dataNews, '_id')[id]
			});
		}, 400);
	};
}

// Fetch News Comments by News ID
export function fetchNewsComments(id) {
	return dispatch => {
		dispatch({
			type: FETCH_NEWS_COMMENTS_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_NEWS_COMMENTS_DONE,
				payload: _.mapKeys(dataComments, '_id')
			});
		}, 700);
	};
}