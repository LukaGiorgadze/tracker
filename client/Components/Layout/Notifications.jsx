import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, Dropdown, Icon, Label, Feed, Loader } from 'semantic-ui-react'
import { fetchNotifications } from '../../Actions/Notifications';

let UserNotificationsTrigger = (
	<div title="შეტყობინებები">
		<Icon name="alarm outline" size="large" />
		<Label color="red" size="mini" floating>1</Label>
	</div>
)

class UserNotifications extends React.Component {

	onOpen = () => {
		this.props.fetchNotifications();
	}

	itemOnClick = () => {
		this.props.closeMobileNav();
	}
	
	loadingItem = () => {
		return (
			<Dropdown.Menu>
				<Dropdown.Item onClick={this.itemOnClick}>
					<Loader active inline="centered" />
				</Dropdown.Item>
			</Dropdown.Menu>
		)
	}

	render() {
		return (
			<Dropdown trigger={UserNotificationsTrigger} pointing="top right" icon={null} onOpen={this.onOpen}>
				{(this.props.notifications.loading || !this.props.notifications.data.length) && this.loadingItem()}
			</Dropdown>
		)
	}
}


// State for this component
function mapStateToProps(state) {
	return {
		notifications: state.notifications.notificationsList
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		fetchNotifications: bindActionCreators(fetchNotifications, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(UserNotifications);