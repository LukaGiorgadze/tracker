import {
	FETCH_NEWS_ITEMS_START,
	FETCH_NEWS_ITEMS_DONE,
	FETCH_NEWS_ITEMS_ERROR,
	FETCH_NEWS_ITEM_START,
	FETCH_NEWS_ITEM_DONE,
	FETCH_NEWS_ITEM_ERROR
}
from '../Actions/Types';
import { dataNews } from '../Data';


// Fetch News Items
export function fetchNewsItems() {
	return dispatch => {
		dispatch({
			type: FETCH_NEWS_ITEMS_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_NEWS_ITEMS_DONE,
				payload: _.mapKeys(dataNews, 'id')
			});
		}, 1000);		
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
				payload: _.mapKeys(dataNews, 'id')[id]
			});
		}, 1000);
	};
}