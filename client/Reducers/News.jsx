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


let initialState = {
	newsList: {
		data: [],
		loading: false,
		error: null
	},
	newsActive: {
		data: null,
		loading: false,
		error: null
	},
	newsComments: {
		data: [],
		loading: false,
		error: null
	}
};


function news(state = initialState, action = {}) {
	switch(action.type) {
		case FETCH_NEWS_ITEMS_START: {
			return {
					...state,
					newsList: {
						data: [],
						loading: true
					}
				};
			break;
		}
		case FETCH_NEWS_ITEMS_DONE: {
			return {
					...state,
					newsList: {
						data: action.payload,
						loading: false
					}
				};
			break;
		}
		case FETCH_NEWS_ITEM_START: {
			return {
					...state,
					newsActive: {
						...state.newsActive,
						loading: true
					}
				};
			break;
		}
		case FETCH_NEWS_ITEM_DONE: {
			return {
					...state,
					newsActive: {
						data: action.payload,
						loading: false
					}
				};
			break;
		}
		case FETCH_NEWS_COMMENTS_START: {
			return {
				...state,
				newsComments: {
					data: [],
					loading: true
				}
			};
			break;
		}
		case FETCH_NEWS_COMMENTS_DONE: {
			return {
				...state,
				newsComments: {
					data: action.payload,
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

export default news;