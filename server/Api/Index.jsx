// Application Initialization and Module Dependencies
import Express 	from 'express';
import config from '../Config';
import bodyParser from 'body-parser';

// Middlewares
import CORS from '../Middleware/CORS'
import Authenticate from '../Middleware/Authenticate'

// API Routers
import signin from './Routes/Signin';
import news	from './Routes/News';

// Module declarations
const app = Express();

// Middlewares
app.use(bodyParser.json());
app.use(CORS);
app.use(Authenticate);

// Setup middleware and Hot in Development Environment
app.use('/signin',  signin);
app.use('/news',  news);
app.get('/*',  function(req, res) {
	res.status(400).send({
		error: 'NO_ROUTE_MATCHES'
	});
});

// App listening
app.listen(config.portAPI);