import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import LoginPage from './components/LoginPage';


export default (
	<Route path="/" component={Main}>
		<Route path="login" component={LoginPage} />
	</Route>
);