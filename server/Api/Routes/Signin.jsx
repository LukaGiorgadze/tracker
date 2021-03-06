// Route Dependencies
import Express from 'express';
import Users from '../Models/Users';
import jwt from 'jsonwebtoken';
import config from '../../Config';

// Module Declarations
const router = Express.Router();

// Actions (Routes)
router.post('/', function(req, res) {
	const { user, pass } = req.body;
	Users.signIn(user, pass, function(err, doc) {
		if(doc) {
			const token = jwt.sign({
				id: doc._id,
				groupId: doc.groupId,
				admin: doc.admin,
				fullname: doc.fName + ' ' + doc.lName,
				avatar: doc.avatar
			}, config.jwtSecret);
			res.status(200).send({
				token
			});
		} else {
			res.status(401).send({
				error: 'AUTH_UNAUTHORIZED'
			});
		}
		if(err) {
			res.status(500).send({
				error: 'AUTH_ERROR'
			});
		}
	});
});

export default router;