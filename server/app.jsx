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

// Setup middleware and Hot in Development Environment
if(config.environment === 'development')
{
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
	console.log( config.environment );
	res.sendFile(Path.join(__dirname, '../', config.publicHtml, 'index.html'));
});




// App listening
app.listen(config.port);