// Application Initialization and Module Dependencies
import Express 				from 'express';
import Path 				from 'path';
import webpack 				from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig		from '../webpack.config.js';
import config 				from './config.jsx'

// Module declarations
const app = Express();
const router = Express.Router();

// Development Environment
if(config.environment === 'development')
{
	// Setup middleware and Hot in Development Environment
	const compiler = webpack(webpackConfig);
	app.use(webpackDevMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true,
		stats: {
			chunks: false
		}
	}));
	app.use(webpackHotMiddleware(compiler));

	//development error handler (will print stacktrace)
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use('/api', require('./api').app);
app.use('/', require('./app').app);


// App listening
app.listen(config.port);