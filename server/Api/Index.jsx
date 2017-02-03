// Application Initialization and Module Dependencies
import Express 	from 'express';
import config from '../Config';

// Middlewares
import helmet from 'helmet';
import bodyParser from 'body-parser';
import CORS from '../Middleware/CORS';
import Authenticate from '../Middleware/Authenticate';

// API Routers
import signin from './Routes/Signin';
import posts	from './Routes/Posts';

// Module declarations
const app = Express();

// Middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(CORS);
app.use(Authenticate);

// API Routes
app.use('/signin', signin);
app.use('/posts', posts);
app.get('/*', function(req, res) {
	res.status(400).send({
		error: 'NO_ROUTE_MATCHES'
	});
});

// App listening
app.listen(config.portAPI);