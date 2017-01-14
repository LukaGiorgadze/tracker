// Application Initialization and Module Dependencies
import Express 	from 'express';
import config from '../Config';
import bodyParser from 'body-parser';
import CORS from '../Middleware/CORS'

// API Routers
import news	from './Routes/News';
import signin from './Routes/Signin';

// Module declarations
const app = Express();

// Middlewares
app.use(bodyParser.json());
app.use(CORS);

// Setup middleware and Hot in Development Environment
app.use('/news',  news);
app.use('/signin',  signin);
app.get('/*',  function(req, res) {
	res.send('Nothing to show');
});

// App listening
app.listen(config.portAPI);