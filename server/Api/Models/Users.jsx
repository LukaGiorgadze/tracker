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
		required: true
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: Number
	},
	group: {
		type: Schema.ObjectId
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
module.exports.signIn = (user, pass) => {
	console.log(user, pass);
};
// Add User
module.exports.add = (data) => {
	let user = new Users(data);
	return user.save();
};


export default Users;