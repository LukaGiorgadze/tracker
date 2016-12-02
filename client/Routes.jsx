import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Components/Main';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import NotFound from './Components/NotFound';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={Dashboard} />
		<Route path="about" component={About} />
		<Route path="*" component={NotFound} />
	</Route>
)