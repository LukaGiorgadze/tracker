// Application Initialization and Module Dependencies
import mongoose from 'mongoose';
import db from '../Mongoose'
const Schema = mongoose.Schema;

// Model
const usersSchema = new Schema({
	fName: {
		type: String,
		required: true
	},
	lName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: Number
	},
	groupId: {
		type: Schema.ObjectId,
		index: true
	},
	since: {
		type: Date,
		required: true
	},
	settings: {
		notificationSms: {
			type: Boolean
		},
		notificationEmail: {
			type: Boolean
		}
	}
});
const Users = module.exports = mongoose.model('users', usersSchema);

// Sign in
module.exports.signIn = (user, pass, callback) => {
	Users.findOne({
		email: user,
		password: pass
	}, callback);
};
// Get user by ID
module.exports.getUserById = (id, callback) => {
	Users.findOne({
		_id: id
	}, callback);
};
// Get user by group ID and ID
module.exports.getUserByGroupId = (id, groupId, callback) => {
	Users.findOne({
		_id: id,
		groupId: groupId
	}, callback);
};
// Add User
module.exports.add = (data) => {
	let user = new Users(data);
	return user.save();
};


export default Users;