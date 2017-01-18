import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, Dropdown, Icon, Label, Feed, Loader } from 'semantic-ui-react';
import _ from 'lodash';
import { Translate, I18n } from 'react-redux-i18n';
import config from '../../Config';
import { link } from '../../Functions';
import { fetchNotifications, fetchNotificationsN, viewNotifications } from '../../Actions/Notifications';

let UserNotificationsTrigger = (props) => {
	return(
		<div title={I18n.t('layout.notifications')}>
			<Icon name="alarm outline" size="large" />
			{(props > 0) && <Label color="red" size="mini" floating>{props}</Label>}
		</div>
	);
};


class UserNotifications extends React.Component {

	constructor(props) {
		super(props);
		this.state = {timeout: 0};
	};

	componentWillMount() {
		this.props.fetchNotificationsN();
	};

	onOpen = () => {
		(this.props.notificationsN > 0 || _.isEmpty(this.props.notifications.data)) && this.props.fetchNotifications();
		if(this.props.notificationsN > 0) {
			this.setState({
				timeout: setTimeout(() => { this.props.viewNotifications(); }, 1000)
			});
		}
	};

	onClose = () => {
		this.props.notificationsN > 0 && clearTimeout(this.state.timeout);
	};

	itemOnClick = (props) => {
		this.props.closeMobileNav();
		link(props);
	};
	
	loadingItem = () => {
		return (
			<Dropdown.Item onClick={this.itemOnClick}>
				<Loader active inline="centered" />
			</Dropdown.Item>
		);
	};

	notificationType = (props) => {
		let data = {};
		switch(props)
		{
			case 'comment':
				data.type = 'comment';
				data.color = 'grey';
				data.text = <Translate value="layout.commented" />;
				break;
			case 'like':
				data.type = 'like';
				data.color = 'red';
				data.text = <Translate value="layout.likedPost" />;
				break;
			default:
				data.type = '';
				data.color = '';
				data.text = '';
				break;
		}
		return data;
	};

	renderNotifications = () => {
		let itemOnClick = this.itemOnClick;
		let notificationType = this.notificationType;

		return _.map(this.props.notifications.data, function(item, key) {
			let notification = notificationType(item.type);
			return(
				<Dropdown.Item key={item._id} onClick={() => { itemOnClick(item.link) }} className={!item.read ? 'unread' : null}>
					<Feed size="small">
						<Feed.Event>
							<Feed.Label>
								<Image className="avatar2" src={config.dirUploadsUsers + item.author.avatar} />
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
	};

	render() {
		return (
			<Dropdown trigger={UserNotificationsTrigger(this.props.notificationsN)} pointing="top right" icon={null} onOpen={this.onOpen} onClose={this.onClose}>
				<Dropdown.Menu>
					{
						(this.props.notifications.loading || _.isEmpty(this.props.notifications.data))
						?
						this.loadingItem()
						:
						this.renderNotifications()
					}
				</Dropdown.Menu>
			</Dropdown>
		)
	}
}


// State for this component
function mapStateToProps(state) {
	return {
		notifications: state.notifications.notificationsList,
		notificationsN: state.notifications.notificationsN
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		fetchNotifications: bindActionCreators(fetchNotifications, dispatch),
		fetchNotificationsN: bindActionCreators(fetchNotificationsN, dispatch),
		viewNotifications: bindActionCreators(viewNotifications, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(UserNotifications);