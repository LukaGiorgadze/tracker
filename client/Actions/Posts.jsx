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


// Fetch Post Items
export function fetchPostItems(params) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_ITEMS_START
		});
		return api.get('/posts/all')
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
				throw new Error(err);
			});
	};
}

// Fetch One Post Item
export function fetchPostItem(id) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_ITEM_START
		});
		return api.get(`/posts/${id}`)
			.then(function (res) {
				dispatch({
					type: FETCH_POST_ITEM_DONE,
					payload: res.data
				});
				return true;
			})
			.catch(function (err) {
				dispatch({
					type: FETCH_POST_ITEM_ERROR,
					payload: err
				});
				throw new Error(err);
			});
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
				throw new Error(err);
			});
	};
}

// Delete Post Item by ID
export function deletePostItem(id) {
	return dispatch => {
		dispatch({
			type: DELETE_POST_ITEM_START
		});
		return api.delete(`/posts/${id}`)
			.then(function (res) {
				dispatch({
					type: DELETE_POST_ITEM_DONE,
					payload: id
				});
				return true;
			})
			.catch(function (err) {
				dispatch({
					type: DELETE_POST_ITEM_ERROR,
					payload: err
				});
				throw new Error(err);
			});
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
		}, 1000);
	};
}



// Fetch Post Comments by Post ID
export function fetchPostComments(postId) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_COMMENTS_START
		});
		return api.get(`/posts/comments/${postId}`)
		.then(function (res) {
			dispatch({
				type: FETCH_POST_COMMENTS_DONE,
				payload: _.mapKeys(res.data, '_id')
			});
			return true;
		})
		.catch(function (err) {
			dispatch({
				type: FETCH_POST_COMMENTS_ERROR,
				payload: err
			});
			throw new Error(err);
		});
	};
}

// Add Comment
export function addCommentItem(data) {
	return dispatch => {
		dispatch({
			type: ADD_COMMENT_ITEM_START
		});
		return api.post('/posts/comments/add', data)
			.then(function (res) {
				dispatch({
					type: ADD_COMMENT_ITEM_DONE,
					payload: res.data
				});
				return true;
			})
			.catch(function (err) {
				dispatch({
					type: ADD_COMMENT_ITEM_ERROR,
					payload: err
				});
				throw new Error(err);
			});
	};
}

// Delete Comment Item by ID
export function deleteCommentItem(id) {
	return dispatch => {
		dispatch({
			type: DELETE_COMMENT_ITEM_START
		});
		return api.delete(`/posts/comments/${id}`)
			.then(function (res) {
				dispatch({
					type: DELETE_COMMENT_ITEM_DONE,
					payload: id
				});
				return true;
			})
			.catch(function (err) {
				dispatch({
					type: DELETE_COMMENT_ITEM_ERROR,
					payload: err
				});
				throw new Error(err);
			});
	};
}