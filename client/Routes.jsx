import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Components/Layout/Main';
import News from './Components/News';
import NewsView from './Components/NewsView';
import Payments from './Components/Payments';
import PaymentsPay from './Components/PaymentsPay';
import Reports from './Components/Reports';
import ReportsView from './Components/ReportsView';
import Settings from './Components/Settings';
import Signout from './Components/Signout';
import NotFound from './Components/NotFound';
import Index from './Components/Index';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={News} />
		<Route path="news">
			<IndexRoute component={News} />
			<Route path="view/:newsId" component={NewsView} />
		</Route>
		<Route path="payments">
			<IndexRoute component={Payments} />
			<Route path="pay" component={PaymentsPay} />
		</Route>
		<Route path="reports">
			<IndexRoute component={Reports} />
			<Route path="view/:reportId" component={ReportsView} />
		</Route>
		<Route path="settings" component={Settings} />
		<Route path="signout" component={Signout} />
		<Route path="*" component={NotFound} />
	</Route>
)