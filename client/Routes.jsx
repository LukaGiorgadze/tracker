import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Components/Layout/Main';
import News from './Components/News';
import NewsID from './Components/NewsID';
import Payments from './Components/Payments';
import Budget from './Components/Budget';
import Settings from './Components/Settings';
import Signout from './Components/Signout';
import NotFound from './Components/NotFound';
import Index from './Components/Index';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={News} />
		<Route path="news">
			<IndexRoute component={News} />
			<Route path=":newsId" component={NewsID} />
		</Route>
		<Route path="payments" component={Payments} />
		<Route path="budget" component={Budget} />
		<Route path="settings" component={Settings} />
		<Route path="signout" component={Signout} />
		<Route path="*" component={NotFound} />
	</Route>
)