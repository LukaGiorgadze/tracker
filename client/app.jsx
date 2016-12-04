import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './Routes'

require('./css/main.css');
// http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router?rq=1
render(
	<Router history={browserHistory}>
		{routes}
	</Router>,
	document.querySelector("#app")
);

if(module.hot) {
	module.hot.accept();
}