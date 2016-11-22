'use strict';

// Include all required modules
const Webpack 				= require('webpack');
const Path 					= require('path');
const ExtractTextPlugin		= require('extract-text-webpack-plugin');
const HtmlWebpackPlugin 	= require('html-webpack-plugin');
const WebpackCleanupPlugin 	= require('webpack-cleanup-plugin');
const loaders 				= require('./webpack.loaders');

// Global Config
const config = require('./server/config.jsx');

// Add Loaders
loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
});

// Export Webpack Config
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/' + config.clientMain
	],
	output: {
		path: Path.join(__dirname, config.publicHtml),
		publicPath: '/',
		filename: '[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new Webpack.NoErrorsPlugin(),
		// Remove old Assets
		new WebpackCleanupPlugin(),
		// Uglify Scripts
		new Webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		// Minimize CSS
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		}),
		// Create Main Template
		new HtmlWebpackPlugin({
			template: __dirname + '/client/template.html',
			filename: __dirname + '/' + config.publicHtml + '/index.html',
			inject: 'body',
			hash: false,
			minify: false,
			//favicon: 'favicon.ico'
		}),
		//new Webpack.optimize.DedupePlugin()
	]
};
