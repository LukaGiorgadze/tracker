import express from 'express';
import Users from '../Models/Users';


const router = express.Router();


router.post('/', function(req, res) {
	const { username, password } = req.body;

	Users.signIn(username, password);
});

export default router;