import config from '../Config';

// Add headers
let CORS = function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', config.protocol + config.host + ':' + config.port);
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', false);
	req.method === 'OPTIONS' ? res.sendStatus(204) : next();
};

export default CORS;