import {
	FETCH_POST_ITEMS_START,
	FETCH_POST_ITEMS_DONE,
	FETCH_POST_ITEMS_ERROR,
	FETCH_POST_ITEM_START,
	FETCH_POST_ITEM_DONE,
	FETCH_POST_ITEM_ERROR,
	FETCH_POST_COMMENTS_START,
	FETCH_POST_COMMENTS_DONE,
	FETCH_POST_COMMENTS_ERROR,
	TOGGLE_LIKE_START,
	TOGGLE_LIKE_DONE,
	TOGGLE_LIKE_ERROR
}
from '../Actions/Types';


let initialState = {
	postList: {
		data: [],
		loading: false,
		error: null
	},
	postActive: {
		data: null,
		loading: false,
		error: null
	},
	postComments: {
		data: [],
		loading: false,
		error: null
	}
};


function posts(state = initialState, action = {}) {
	switch(action.type) {
		case FETCH_POST_ITEMS_START: {
			return {
					...state,
					postList: {
						data: [],
						loading: true
					}
				};
		}
		case FETCH_POST_ITEMS_DONE: {
			return {
					...state,
					postList: {
						data: action.payload,
						loading: false
					}
				};
		}
		case FETCH_POST_ITEM_START: {
			return {
					...state,
					postActive: {
						...state.postActive,
						loading: true
					}
				};
		}
		case FETCH_POST_ITEM_DONE: {
			return {
					...state,
					postActive: {
						data: action.payload,
						loading: false
					}
				};
		}
		case FETCH_POST_COMMENTS_START: {
			return {
				...state,
				postComments: {
					data: [],
					loading: true
				}
			};
		}
		case FETCH_POST_COMMENTS_DONE: {
			return {
				...state,
				postComments: {
					data: action.payload,
					loading: false
				}
			};
		}
		case TOGGLE_LIKE_START: {
			return state;
		}
		case TOGGLE_LIKE_DONE: {
			return {
				...state,
				postList: {
					...state.postList,
					data: {...state.postList.data, [action.payload._id]: action.payload}
				},
				postActive: {
					...state.postActive,
					data: state.postActive.data !== null && state.postActive.data._id == action.payload._id ? action.payload : state.postActive.data
				}
			}
		}
		default: {
			return state;
		}
	}
}

export default posts;