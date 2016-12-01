import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import routes from './Routes'

require('./css/cssreset.css');
require('./css/main.css');

render(
	<Router history={browserHistory} routes={routes} />,
	document.querySelector("#app")
);



if(module.hot) {
	module.hot.accept();
}