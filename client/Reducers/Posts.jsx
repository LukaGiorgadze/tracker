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
	TOGGLE_LIKE_ERROR,
	ADD_POST_ITEM_START,
	ADD_POST_ITEM_DONE,
	ADD_POST_ITEM_ERROR,
	DELETE_POST_ITEM_START,
	DELETE_POST_ITEM_DONE,
	DELETE_POST_ITEM_ERROR,
	DELETE_COMMENT_ITEM_START,
	DELETE_COMMENT_ITEM_DONE,
	DELETE_COMMENT_ITEM_ERROR,
	ADD_COMMENT_ITEM_START,
	ADD_COMMENT_ITEM_DONE,
	ADD_COMMENT_ITEM_ERROR
}
from '../Actions/Types';
import _ from 'lodash';

let initialState = {
	loading: false, // Global Loading for this reducer
	postList: {
		data: {},
		loading: false,
		error: null
	},
	postActive: {
		data: null,
		loading: false,
		error: null
	},
	postComments: {
		data: {},
		loading: false,
		error: null
	}
};


function posts(state = initialState, action = {}) {
	switch(action.type) {
		// action.payload = Objects
		case FETCH_POST_ITEMS_START: {
			return {
					...state,
					postList: {
						data: {},
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
		// action.payload = Item object
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
		// action.payload = Objects
		case FETCH_POST_COMMENTS_START: {
			return {
				...state,
				postComments: {
					data: {},
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
		// action.payload = Item object
		case TOGGLE_LIKE_START: {
			return state;
		}
		case TOGGLE_LIKE_DONE: {
			return {
				...state,
				postList: {
					...state.postList,
					data: state.postList.data[action.payload._id] !== undefined ? {...state.postList.data, [action.payload._id]: action.payload} : {...state.postList.data}
				},
				postActive: {
					...state.postActive,
					data: state.postActive.data !== null && state.postActive.data._id == action.payload._id ? action.payload : state.postActive.data
				}
			}
		}
		// action.payload = post item object
		case ADD_POST_ITEM_START: {
			return {
				...state,
				loading: true
			};
		}
		case ADD_POST_ITEM_DONE: {
			return {
				...state,
				loading: false,
				postList: {
					data: {[action.payload._id]: action.payload, ...state.postList.data}
				}
			}
		}
		// action.payload = ID
		case DELETE_POST_ITEM_START: {
			return state;
		}
		case DELETE_POST_ITEM_DONE: {
			return {
				...state,
				postList: {
					...state.postList,
					data: state.postList.data[action.payload] !== undefined ? _.omit(state.postList.data, action.payload) : {...state.postList.data}
				},
				postActive: {
					...state.postActive,
					data: {}
				},
				postComments: {
					...state.postComments,
					data: {}
				}
			}
		}
		// action.payload = ID
		case DELETE_COMMENT_ITEM_START: {
			return state;
		}
		case DELETE_COMMENT_ITEM_DONE: {
			return {
				...state,
				postComments: {
					...state.postComments,
					data: state.postComments.data[action.payload] !== undefined ? _.omit(state.postComments.data, action.payload) : {...state.postComments.data}
				}
			}
		}
		default: {
			return state;
		}
	}
}

export default posts;