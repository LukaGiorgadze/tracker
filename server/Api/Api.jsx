// Application Initialization and Module Dependencies
import Express 	from 'express';
import config from '../Config';
import news	from './News';

// Module declarations
const app = Express();

// Setup middleware and Hot in Development Environment
app.use('/news',  news);
app.get('/*',  function(req, res) {
	res.send('Nothing to show');
});

// App listening
app.listen(config.portAPI);