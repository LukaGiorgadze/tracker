'use strict';

// Application Initialization and Module Dependencies
import Express 				from 'express';
import Path 				from 'path';
import webpack 				from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig		from '../webpack.config.production.js';
// Global Config
import config 				from './config.jsx'
// Module declarations
const app = Express();

// Setup middleware and Hot
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

// Set default public html directory
app.use(Express.static(__dirname + '../' + config.publicHtml));

// All Get request goes here
app.get('/*', (req, res) => {
	res.sendFile(Path.join(__dirname, '../' + config.publicHtml + '/index.html'));
	console.log(module);
});

if (module.hot) {
	module.hot.accept();
}

// Listen Port 3000
app.listen(3000);