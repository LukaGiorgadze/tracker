import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import routes from './Routes'

require('./css/cssreset.css');
require('./css/main.css');

injectTapEventPlugin();

render(
	<Router history={browserHistory} routes={routes} />,
	document.querySelector("#app")
);



if(module.hot) {
	module.hot.accept();
}