module.exports = {
	protocol: 'http://',
	host: '192.168.1.2',
	port: '3000',
	portAPI: '3001',
	database: 'mongodb://127.0.0.1:27017/tracker',
	jwtSecret: 'MySecretIs-11:09@foreverAsOne!',
	publicHtml: 'www',	// Public path of stored files
	baseUrl: "/",
	dirUploads: "up/",
	serverMain: 'App.jsx',	// Main file of client side
	clientMain: 'App.jsx',	// Main file of server side
	//environment: process.env.NODE_ENV
	environment: process.env.NODE_ENV || 'development'	// development or production
};