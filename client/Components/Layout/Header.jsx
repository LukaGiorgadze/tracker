import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Translate, I18n } from 'react-redux-i18n';
import { Container, Image, Dropdown, Icon } from 'semantic-ui-react'
import config from '../../Config';
import { signout } from '../../Functions';
import UserNotifications from './Notifications';

let UserProfileDropdownTrigger = (props)=> (
	<span>
		<Image className="avatar2" src={config.dirUploadsUsers + props.user.data.avatar} />
		{props.user.data.fullname}
	</span>
);

class UserProfileDropdown extends React.Component {
	render() {
		return (
			<Dropdown className="userProfile" trigger={UserProfileDropdownTrigger(this.props)} pointing="top right">
				<Dropdown.Menu>
					<Dropdown.Item>
						<Link to="/payments" activeClassName="active">
							<Icon name="payment" size="small" /> <Translate value="layout.payments" />
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/settings" activeClassName="active">
							<Icon name="settings" size="small" /> <Translate value="layout.settings" />
						</Link>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<a onClick={signout}>
							<Icon name="sign out" size="small" /> <Translate value="sign.signout" />
						</a>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		)
	}
}


class MobileNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ''
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			status: nextProps.status ? 'active' : ''
		});
	}
	render() {
		return (
			<div className={"mobileNav mobileNavCloser showOnTabletAndDown " + this.state.status} onClick={this.props.closeMobileNavWithClass}>
				<div className="bg">
					<div className="navAvatar">
						<Image centered shape='circular' size="tiny" src={config.dirUploadsUsers + this.props.user.data.avatar} />
					</div>
					<ul>
						<li>
							<Link to="/posts" activeClassName="active" className="mobileNavCloser">
								{I18n.t('layout.posts')}
							</Link>
						</li>
						<li>
							<Link to="/payments" activeClassName="active" className="mobileNavCloser">
								{I18n.t('layout.notifications')}
							</Link>
						</li>
						<li>
							<Link to="/reports" activeClassName="active" className="mobileNavCloser">
								{I18n.t('layout.reports')}
							</Link>
						</li>
						<li>
							<Link to="/settings" activeClassName="active" className="mobileNavCloser">
								{I18n.t('layout.settings')}
							</Link>
						</li>
						<li>
							<Link onClick={signout} activeClassName="active" className="mobileNavCloser">
								{I18n.t('sign.signout')}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}


export class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			mobileNavStatus: false
		}
	}

	toggleMobileNav = () => {
		this.setState({
			mobileNavStatus: !this.state.mobileNavStatus
		});
	};

	closeMobileNav = () => {
		this.setState({
			mobileNavStatus: false
		});
	};

	closeMobileNavWithClass = (e) => {
		if(e.target.classList.contains('mobileNavCloser')) {
			this.setState({
				mobileNavStatus: false
			});
		}
	};

	render() {
		return (
			<div className="mainHeader">
				<Container>
					<div className="logo hideOnTabletAndDown">
						<h1 className="BPGSquareMtavruli"><a href="/" style={{color:'white'}}>ლოგო</a></h1>
					</div>
					<div className={"sidebarIcon showOnTabletAndDown " + (this.state.mobileNavStatus ? "active" : "")} onClick={this.toggleMobileNav}>
						<Icon name="sidebar" size="large" />
					</div>
					<div className="userHeader">
						<div className="userNotificationsContainer">
							<div className="userMessages">
							</div>
							<div className="userNotifications">
								<UserNotifications closeMobileNav={this.closeMobileNav} />
							</div>
						</div>
						<div className="userProfile hideOnTabletAndDown">
							<UserProfileDropdown user={this.props.user} />
						</div>
					</div>
					<MobileNav status={this.state.mobileNavStatus} closeMobileNavWithClass={this.closeMobileNavWithClass} user={this.props.user} />
				</Container>
			</div>
		)
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		user: state.user
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {

	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(Header);