import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './Components/Index';
import Signin from './Components/Sign/Signin';
import Wrapper from './Components/Layout/Wrapper';
import Posts from './Components/Posts';
import PostView from './Components/PostView';
import Payments from './Components/Payments';
import PaymentsPay from './Components/PaymentsPay';
import Reports from './Components/Reports';
import ReportsView from './Components/ReportsView';
import Settings from './Components/Settings';
import NotFound from './Components/NotFound';
import SignContainer from './Components/Sign/SignContainer';

export const routes = (
	<Route path="/" component={Index}>
		<Route component={SignContainer}>
			<IndexRoute component={Signin} />
			<Route path="signin" component={Signin} />
		</Route>
		<Route component={Wrapper}>
			<Route path="posts">
				<IndexRoute component={Posts} />
				<Route path="view/:postId" component={PostView} />
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
		</Route>
		<Route component={SignContainer}>
			<Route path="*" component={NotFound} />
		</Route>
	</Route>
);

export default routes;