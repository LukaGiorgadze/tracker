import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Main from './Components/Layout/Main';
import Posts from './Components/Posts';
import PostView from './Components/PostView';
import Payments from './Components/Payments';
import PaymentsPay from './Components/PaymentsPay';
import Reports from './Components/Reports';
import ReportsView from './Components/ReportsView';
import Settings from './Components/Settings';
import Signout from './Components/Signout';
import NotFound from './Components/NotFound';
import SignContainer from './Components/Sign/SignContainer';
import Signin from './Components/Sign/Signin';

const InnerRoutes = (
	<Route path="/" component={Main}>
		<IndexRedirect to="posts" />
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
		<Route path="signout" component={Signout} />
		<Route path="*" component={NotFound} />
	</Route>
);

const SignRoutes = (
	<Route path="/" component={SignContainer}>
		<IndexRoute component={Signin} />
		<Route path="*" component={NotFound} />
	</Route>
);


let LoggedIn = false;
!LoggedIn && document.querySelector('#app').classList.add('verticalCenteringContainer');
export default !LoggedIn ? SignRoutes : InnerRoutes;