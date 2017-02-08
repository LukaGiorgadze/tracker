// Route Dependencies
import Express from 'express';
import assert from 'assert';
import User from '../../Middleware/User';
import Posts  from '../Models/Posts';
import { formatDateTime, timeSince } from '../Helpers/DateTime';
import { checkObjectId } from '../Helpers/Security';

// Module Declarations
const router = Express.Router();

// Get posts
router.get('/all', User, function(req, res) {
	let filters = {
		groupId: req.user.groupId
	};
	Posts.getAll(filters, (err, data) => {
		let posts = [];
		data.forEach(function(post) {
			posts.push({
				"_id": post._id,
				"author": {
					"id": post.authorId._id,
					"fullname": post.authorId.fName + ' ' + post.authorId.lName,
					"avatar": post.authorId.avatar
				},
				"date": formatDateTime(post.date),
				"timeSince": timeSince(post.date),
				"content": post.content,
				"likesN": post.likesN,
				"liked": false,
				"commentsN": post.commentsN
			});
		});
		res.status(200).send(posts);
	})
});


// Get post by ID
router.get('/:id', function(req, res) {
	let error = false;
	if(!checkObjectId(req.params.id)) {
		error = 'app.badObjectId';
	}
	if(error === false) {
		Posts.getOne(req.params.id, (err, data) => {
			if(err) {
				throw new Error(err);
			}
			if(data.length) {
				let post = {
					"_id": data[0]._id,
					"author": {
						"id": data[0].authorId._id,
						"fullname": data[0].authorId.fName + ' ' + data[0].authorId.lName,
						"avatar": data[0].authorId.avatar
					},
					"date": formatDateTime(data[0].date),
					"timeSince": timeSince(data[0].date),
					"content": data[0].content,
					"likesN": data[0].likesN,
					"liked": false,
					"commentsN": data[0].commentsN
				};
				res.status(200).send(post);
			} else {
				res.status(404).send({
					'error': 'app.notFound'
				});
			}
		});
	} else {
		res.status(400).send({
			'error': error
		});
	}
});


// Add new post
router.post('/add', User, function(req, res) {
	let error = false;
	if(!req.user.admin) {
		error = 'app.actionNoAccess';
	}
	if(req.body.content.length < 2) {
		error = 'posts.writeSomething';
	}
	if(error === false) {
		const data = {
			authorId: req.user.id,
			groupId: req.user.groupId,
			content: req.body.content
		};
		Posts.add(data, function(err, doc) {
			if(err) {
				throw new Error(err);
			}
			res.status(200).send({
				"_id": doc._id,
				"author": {
					"id": req.user.id,
					"fullname": req.user.fullname,
					"avatar": req.user.avatar
				},
				"date":  formatDateTime(doc.date),
				"timeSince": timeSince(doc.date),
				"content": req.body.content,
				"likesN": 0,
				"liked": false,
				"commentsN": 0
			});
		});
	} else {
		res.status(400).send({
			'error': error
		});
	}
});


// Delete post by ID
router.delete('/:id', User, function(req, res) {
	let error = false;
	if(!req.user.admin) {
		error = 'app.actionNoAccess';
	}
	if(!checkObjectId(req.params.id)) {
		error = 'app.badObjectId';
	}
	if(error === false) {
		Posts.delete(req.params.id, (err, comRes) => {
			if(err) {
				throw new Error(err);
			} else {
				res.sendStatus(comRes.result.n ? 204 : 404);
			}
		});
	} else {
		res.status(400).send({
			'error': error
		});
	}
});


// Get Comments
router.get('/comments/:postId', function(req, res) {
	let error = false;
	if(!checkObjectId(req.params.postId)) {
		error = 'app.badObjectId';
	}
	if(error === false) {
		Posts.getComments(req.params.postId, (err, data) => {
			let comments = [];
			data.forEach(function(post) {
				comments.push({
					"_id": post._id,
					"author": {
						"id": post.authorId._id,
						"fullname": post.authorId.fName + ' ' + post.authorId.lName,
						"avatar": post.authorId.avatar
					},
					"date": formatDateTime(post.date),
					"timeSince": timeSince(post.date),
					"content": post.content,
					"likesN": post.likesN,
					"liked": false,
					"commentsN": post.commentsN
				});
			});
			res.status(200).send(comments);
		});
	} else {
		res.status(400).send({
			'error': error
		});
	}
});


// Add Comment
router.post('/comments/add', User, function(req, res) {
	let error = false;
	if(!req.body.content.length) {
		error = 'comments.writeSomething';
	}
	if(!checkObjectId(req.body.postId)) {
		error = 'app.badObjectId';
	}
	if(error === false) {
		const data = {
			authorId: req.user.id,
			groupId: req.user.groupId,
			content: req.body.content,
			postId: req.body.postId
		};
		Posts.addComment(data, function(err, doc) {
			if(err) {
				throw new Error(err);
			}
			res.status(200).send({
				"_id": doc._id,
				"author": {
					"id": req.user.id,
					"fullname": req.user.fullname,
					"avatar": req.user.avatar
				},
				"postId": doc.postId,
				"date":  formatDateTime(doc.date),
				"timeSince": timeSince(doc.date),
				"content": req.body.content
			});
		});
	} else {
		res.status(400).send({
			'error': error
		});
	}
});


// Delete comment by ID
router.delete('/comments/:id', User, function(req, res) {
	let error = false;
	if(!checkObjectId(req.params.id)) {
		error = 'app.badObjectId';
	}
	if(error === false) {
		Posts.getOneComment(req.params.id, (err, data) => {
			if(err) {
				throw new Error(err);
			} else {
				if(data && (req.user.admin || data.authorId.toString() === req.user.id)) {
					Posts.deleteComment(req.params.id, (err) => {
						if(err) {
							throw new Error(err);
						} else {
							res.sendStatus(204);
						}
					});
				} else {
					res.sendStatus(404);
				}
			}
		});
	} else {
		res.status(400).send({
			'error': error
		});
	}

});


export default router;