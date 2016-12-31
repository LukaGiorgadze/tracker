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

// Set default public html directory
app.use(Express.static(Path.join(__dirname, '../', config.publicHtml)));

// All Get request goes here
app.get('/*', (req, res) => {
	res.sendFile(Path.join(__dirname, '../', config.publicHtml, 'index.html'));
});


exports.app = app;