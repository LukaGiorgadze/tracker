// Application Initialization and Module Dependencies
import jwt from 'jsonwebtoken';
import config from '../Config';

// Get User Info
export let User = function(req, res, next) {
	const token = req.headers['authorization'].split(' ')[1];
	try {
		req.user = jwt.verify(token, config.jwtSecret);
		next();
	} catch(err) {
		res.sendStatus(403);
		throw new Error(err);
	}
};
export default User;