// Application Initialization and Module Dependencies
import jwt from 'jsonwebtoken';
import config from '../Config';
import { getUserByGroupId } from '../Api/Models/Users';

// Check Auth token
export let Authenticate = function(req, res, next) {
	if(req.url === '/signin' || req.url === '/generateToken') {
		next();
	} else {
		let authHeader = req.headers['authorization'], token;
		if(authHeader) {
			token = authHeader.split(' ')[1];
		}
		if(token) {
			jwt.verify(token, config.jwtSecret, (err, user) => {
				if(!err) {
					getUserByGroupId(user.id, user.groupId, (err, doc) => {
						if(doc) {
							next();
						}
						else {
							res.status(403).send({
								error: 'AUTH_INVALID_USER'
							});
						}
						if(err) {
							res.status(500).send({
								error: 'AUTH_ERROR 2'
							});
						}
					});
				}
				else {
					res.status(403).send({
						error: 'AUTH_INVALID_TOKEN'
					});
				}
			});
		} else {
			res.status(403).send({
				error: 'AUTH_NO_TOKEN'
			});
		}
	}

};
export default Authenticate;