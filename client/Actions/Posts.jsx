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
import { api }from '../Middleware/Axios';
import { dataPosts, dataComments } from '../Data';


// Fetch Post Items
export function fetchPostItems(opts) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_ITEMS_START
		});
		return api.post('/posts/get', opts)
			.then(function (res) {
				dispatch({
					type: FETCH_POST_ITEMS_DONE,
					payload: _.mapKeys(res.data, '_id')
				});
				return true;
			})
			.catch(function (err) {
				dispatch({
					type: FETCH_POST_ITEMS_ERROR,
					payload: err
				});
			});
	};
}

// Fetch One Post Item
export function fetchPostItem(id) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_ITEM_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_POST_ITEM_DONE,
				payload: _.mapKeys(dataPosts, '_id')[id]
			});
		}, 400);
	};
}

// Fetch Post Comments by Post ID
export function fetchPostComments(id) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_COMMENTS_START
		});
		setTimeout(() => {
			dispatch({
				type: FETCH_POST_COMMENTS_DONE,
				payload: _.mapKeys(dataComments, '_id')
			});
		}, 700);
	};
}


// Toggle Like Post
export function toggleLike(item) {
	return dispatch => {
		let newItem = {};
		if(item.liked === false) {
			newItem = {...item, liked: true, likesN: item.likesN + 1};
		} else {
			newItem = {...item, liked: false, likesN: item.likesN - 1};
		}
		dispatch({
			type: TOGGLE_LIKE_START
		});
		setTimeout(() => {
			dispatch({
				type: TOGGLE_LIKE_DONE,
				payload: newItem
			});
		}, 100);
	};
}

// Add Post
export function addPostItem(data) {
	return dispatch => {
		dispatch({
			type: ADD_POST_ITEM_START
		});
		return api.post('/posts/add', data)
			.then(function (res) {
				dispatch({
					type: ADD_POST_ITEM_DONE,
					payload: res.data
				});
				return true;
			})
			.catch(function (err) {
				dispatch({
					type: ADD_POST_ITEM_ERROR,
					payload: err
				});
			});
	};
}

// Delete Post Item by ID
export function deletePostItem(id) {
	return dispatch => {
		dispatch({
			type: DELETE_POST_ITEM_START
		});
		setTimeout(() => {
			dispatch({
				type: DELETE_POST_ITEM_DONE,
				payload: id
			});
		}, 100);
	};
}


// Delete Comment Item by ID
export function deleteCommentItem(id) {
	return dispatch => {
		dispatch({
			type: DELETE_COMMENT_ITEM_START
		});
		setTimeout(() => {
			dispatch({
				type: DELETE_COMMENT_ITEM_DONE,
				payload: id
			});
		}, 100);
	};
}