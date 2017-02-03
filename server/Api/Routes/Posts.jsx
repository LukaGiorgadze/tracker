// Route Dependencies
import Express from 'express';
import Posts from '../Models/Posts';
import { formatDateTime, timeSince } from '../Helpers/DateTime';

// Module Declarations
const router = Express.Router();

// Get posts
router.post('/get', function(req, res) {
	let opts = {
		groupId: req.body.groupId
	};
	Posts.getPosts(opts)
		.then((data) => {
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
					"timeSince": timeSince(post.date, true),
					"content": post.content,
					"likesN": post.likesN,
					"liked": false,
					"commentsN": post.commentsN
				});
			});
			res.status(200).send(posts);
		})
		.catch(() => {
			res.status(200).send([]);
		});
});


// Add new post
router.post('/add', function(req, res) {
	let error = false;
	if(req.body.author.id.length !== 24 && req.body.groupId.length !== 24) {
		error = 'sign.UNKNOWN_ERROR';
	}
	if(req.body.content.length < 3) {
		error = 'posts.writeSomething';
	}
	// TODO: საჭიროა შევამოწმოთ ეს იუზერის არის თუ არა ადმინი იმ გრუპაში, სადაც პოსტავს
	if(error === false) {
		const data = {
			authorId: req.body.author.id,
			groupId: req.body.groupId,
			content: req.body.content
		};
		Posts.add(data, function(err, doc) {
			res.status(200).send({
				"_id": doc._id,
				"author": {
					"id": req.body.author.id,
					"fullname": req.body.author.fullname,
					"avatar": req.body.author.avatar
				},
				"date": "05 დეკემბერი, 2016",
				"timeSince": "3 დღის წინ",
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

export default router;