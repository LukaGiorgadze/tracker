// Application Initialization and Module Dependencies
import mongoose from 'mongoose';
import db from '../Mongoose'

const Schema = mongoose.Schema;

// Model of Posts
const schemaPosts = new Schema({
	authorId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'users'
	},
	groupId: {
		type: Schema.Types.ObjectId,
		required: true,
		index: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
	content: {
		type: String,
		required: true
	},
	likesN: {
		type: Number,
		required: true,
		default: 0
	},
	commentsN: {
		type: Number,
		required: true,
		default: 0
	}
});
const Posts = module.exports = mongoose.model('posts', schemaPosts);

// Model of Comments
const schemaComments = new Schema({
	// TODO: comments model
	authorId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'users'
	},
	postId: {
		type: Schema.Types.ObjectId,
		required: true,
		index: true
	},
	groupId: {
		type: Schema.Types.ObjectId,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
	content: {
		type: String,
		required: true
	}
});
const Comments = module.exports = mongoose.model('comments', schemaComments);

// Get all Posts
module.exports.getAll = (filters, callback) => {
	return Posts.
		find({}).
		populate('authorId').
		where('groupId').
		equals(filters.groupId).
		sort('-date').
		exec(callback);
};

// Get Post by ID
module.exports.getOne = (id, callback) => {
	return Posts.
		findOne({}).
		populate('authorId').
		where('_id').
		equals(id).
		exec(callback);
};

// Add Post
module.exports.add = (data, callback) => {
	let posts = new Posts(data);
	return posts.save(callback);
};

// Delete Post by ID
module.exports.delete = (id, callback) => {
	return Posts.remove({_id: id}, callback);
};

// Get Comments by Post ID
module.exports.getComments = (postId, callback) => {
	return Comments.
		find({}).
		populate('authorId').
		where('postId').
		equals(postId).
		sort('-date').
		exec(callback);
};

// Get Comments by ID
module.exports.getOneComment = (id, callback) => {
	return Comments.
		findOne({}).
		where('_id').
		equals(id).
		exec(callback);
};

// Add Comment
module.exports.addComment = (data, callback) => {
	let comments = new Comments(data);
	return comments.save(callback);
};

// Delete Comment by ID
module.exports.deleteComment = (id, callback) => {
	return Comments.remove({_id: id}, callback);
};



// Export default model
export default Posts;