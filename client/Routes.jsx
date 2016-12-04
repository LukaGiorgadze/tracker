import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Components/Main';
import News from './Components/News';
import Payments from './Components/Payments';
import Budget from './Components/Budget';
import Settings from './Components/Settings';
import Signout from './Components/Signout';
import NotFound from './Components/NotFound';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={News} />
		<Route path="news" component={News} />
		<Route path="payments" component={Payments} />
		<Route path="budget" component={Budget} />
		<Route path="settings" component={Settings} />
		<Route path="Signout" component={Signout} />
		<Route path="*" component={NotFound} />
	</Route>
)