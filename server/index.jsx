// Application Initialization and Module Dependencies
import Express 				from 'express';
import Path 				from 'path';
import webpack 				from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig		from '../webpack.config';
import config 				from './Config';

// Module declarations
const app = Express();

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

// Set default public html directory
app.use(Express.static(Path.join(__dirname, '../', config.publicHtml)));

// All Get request goes here
app.get('/*', (req, res) => {
	res.sendFile(Path.join(__dirname, '../', config.publicHtml, 'index.html'));
});

// App listening
app.listen(config.port);