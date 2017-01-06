import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, Dropdown, Icon, Label, Feed, Loader } from 'semantic-ui-react';
import _ from 'lodash';
import { config } from '../../Config';
import { fetchNotifications } from '../../Actions/Notifications';

let UserNotificationsTrigger = (props) => {
	return(
		<div title="შეტყობინებები">
			<Icon name="alarm outline" size="large" />
			{(props > 0) && <Label color="red" size="mini" floating>{props}</Label>}
		</div>
	);
}


class UserNotifications extends React.Component {

	componentWillMount() {
		_.isEmpty(this.props.notifications.data) && this.props.fetchNotifications();
	}

	onOpen = () => {
		
	}

	itemOnClick = () => {
		this.props.closeMobileNav();
	}
	
	loadingItem = () => {
		return (
			<Dropdown.Item onClick={this.itemOnClick}>
				<Loader active inline="centered" />
			</Dropdown.Item>
		);
	}

	notificationType = (props) => {
		let data = {};
		switch(props)
		{
			case 'comment':
				data.type = 'comment';
				data.color = 'grey';
				data.text = 'გააკეთა კომენტარი';
				break;
			case 'like':
				data.type = 'like';
				data.color = 'red';
				data.text = 'მოიწონა პოსტი';
				break;
			default:
				data.type = '';
				data.color = '';
				data.text = '';
				break;
		}
		return data;
	}

	getNotifications = (props) => {
		let itemOnClick = this.itemOnClick;
		let notificationType = this.notificationType;

		return _.map(this.props.notifications.data, function(item, key) {
			let notification = notificationType(item.type);

			return(
				<Dropdown.Item key={key} onClick={itemOnClick}>
					<Feed size="small">
						<Feed.Event>
							<Feed.Label>
								<Image avatar src={config.baseUrl + config.dirUploads + "users/" + item.author.id + ".jpg"} />
							</Feed.Label>
							<Feed.Content>
								<Feed.Date>{item.since}</Feed.Date>
								<Feed.Summary>
									<Feed.User>{item.author.fullname}</Feed.User>
								</Feed.Summary>
								<Feed.Meta>
									<Icon name={notification.type} color={notification.color} /> {notification.text}
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>
					</Feed>
				</Dropdown.Item>
			);
		});
	}


	render() {
		return (
			<Dropdown trigger={UserNotificationsTrigger(this.props.notifications.new)} pointing="top right" icon={null} onOpen={this.onOpen}>
				<Dropdown.Menu>
					{
						(this.props.notifications.loading || _.isEmpty(this.props.notifications.data))
						?
						this.loadingItem()
						:
						this.getNotifications()
					}
				</Dropdown.Menu>
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