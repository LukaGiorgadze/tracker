// Application Initialization and Module Dependencies
import mongoose from 'mongoose';
import db from '../Mongoose'
import Users from './Users';

const Schema = mongoose.Schema;

// Model
const schema = new Schema({
	authorId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'users'
	},
	groupId: {
		type: Schema.Types.ObjectId,
		required: true,
		index: true,
		ref: 'groups'
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
const Posts = module.exports = mongoose.model('posts', schema);

// Add Post
module.exports.getPosts = (opts) => {
	return Posts.
		find({}).
		populate('authorId').
		where('groupId').
		equals(opts.groupId).
		sort('-date');
};

// Add Post
module.exports.add = (data, callback) => {
	let posts = new Posts(data);
	return posts.save(callback);
};

// Export
export default Posts;