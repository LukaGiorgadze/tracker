module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components)/,
		loaders: ["react-hot", "babel"]
	},
	{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
    },
	{
		test: /\.gif/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=5000&mimetype=image/gif&name=img/[sha512:hash:base64:10].[ext]"
	},
	{
		test: /\.jpg/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=5000&mimetype=image/jpg&name=img/[sha512:hash:base64:10].[ext]"
	},
	{
		test: /\.png/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=5000&mimetype=image/png&name=img/[sha512:hash:base64:10].[ext]"
	}
];