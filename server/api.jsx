// Application Initialization and Module Dependencies
import Express 				from 'express';
import news 				from './Api/News';

// Module declarations
const app = Express();

// Setup middleware and Hot in Development Environment
app.use('/news',  news);
app.get('/*',  function(req, res) {
	res.send('Nothing to show');
});

exports.app = app;