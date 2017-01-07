import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { Menu, Icon, Label } from 'semantic-ui-react';

export class NavigationSidebar extends React.Component {
	render() {
		let active = /^post\//g.test(this.props.routing.locationBeforeTransitions.pathname) ? 'active' : '';

		return (
			<Menu fluid pointing secondary vertical>
				<Link className="BPGSquare item" to="/posts" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="feed" />
					</Icon.Group>
					სიახლეები
				</Link>
				<Link className="BPGSquare item" to="/payments" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="payment" />
					</Icon.Group>
					გადასახადები
					<Label color="red" size="tiny">1</Label>
				</Link>
				<Link className="BPGSquare item" to="/reports" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="calendar" />
					</Icon.Group>
					რეპორტი
				</Link>
				<Link className="BPGSquare item" to="/settings" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="settings" />
					</Icon.Group>
					პარამეტრები
				</Link>
				<Link className="BPGSquare item" to="/signout" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="sign out" />
					</Icon.Group>
					გასვლა
				</Link>
			</Menu>
		)
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		routing: state.routing
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(NavigationSidebar);