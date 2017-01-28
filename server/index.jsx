// Application Initialization and Module Dependencies
import Express from 'express';
import Path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import config from './Config';

// Middlewares
import helmet from 'helmet';

// Module declarations
const app = Express();

// Middlewares
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'"],
		scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
		styleSrc: ["'self'", 'cdnjs.cloudflare.com', 'fonts.googleapis.com'],
		fontSrc: ["'self'", 'data:', 'cdnjs.cloudflare.com', 'fonts.gstatic.com'],
		imgSrc: ["'self'", 'data:', 'cdnjs.cloudflare.com'],
		connectSrc: ["'self'", config.host + ':' + config.portAPI]
	}
}));

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
}

// Set default public html directory
app.use(Express.static(Path.join(__dirname, '../', config.publicHtml)));

// All Get request goes here
app.get('/*', (req, res) => {
	res.sendFile(Path.join(__dirname, '../', config.publicHtml, 'index.html'));
});

// App listening
app.listen(config.port, config.host);