import config from '../Config';

// Add headers
let CORS = function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', config.host + ':' + config.port);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Credentials', true);
	req.method === 'OPTIONS' ? res.sendStatus(200) : next();
};

module.exports = CORS;