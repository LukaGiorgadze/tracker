import React from 'react';
import { Container, Grid, Image, Dropdown, Icon, Label, Feed } from 'semantic-ui-react'
import { Link } from 'react-router';

let UserProfileDropdownTrigger = (
	<span>
		<Image avatar src="http://semantic-ui.com/images/avatar2/small/patrick.png" />
		ლუკა გიორგაძე
	</span>
)
let UserMessagesTrigger = (
	<div title="პირადი წერილები">
		<Icon name="comment outline" size="large" />
		<Label color="red" size="mini" floating>3</Label>
	</div>
)
let UserNotificationsTrigger = (
	<div title="შეტყობინებები">
		<Icon name="alarm outline" size="large" />
		<Label color="red" size="mini" floating>1</Label>
	</div>
)

class UserProfileDropdown extends React.Component {
	render() {
		return (
			<Dropdown className="userProfile" trigger={UserProfileDropdownTrigger} pointing="top right">
				<Dropdown.Menu>
					<Dropdown.Item>
						<Link to="/payments" activeClassName="active">
							<Icon name="payment" size="small" />
							{' '} გადახდები
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/settings" activeClassName="active">
							<Icon name="settings" size="small" />
							{' '} პარამეტრები
						</Link>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Link to="/signout" activeClassName="active">
							<Icon name="sign out" size="small" />
							{' '} გასვლა
						</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		)
	}
}

class UserNotifications extends React.Component {
	constructor(props) {
		super(props);
	}

	clickHandler = () => {
		this.props.closeMobileNav();
	}

	render() {
		return (
			<Dropdown trigger={UserNotificationsTrigger} pointing="top right" icon={null}>
				<Dropdown.Menu>
					<Dropdown.Item onClick={this.clickHandler}>
						<Feed size="small">
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar2/small/patrick.png" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>18 წუთის წინ</Feed.Date>
									<Feed.Summary>
										<Feed.User>თეიმურაზ ბობოლაშვილი</Feed.User>
									</Feed.Summary>
									<Feed.Meta>
							          	<Icon name="comment" color="grey" /> გააკეთა კომენტარი
							        </Feed.Meta>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed size="small">
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Summary>
										  <Feed.User>ნატალი გიოგაძე</Feed.User>
									</Feed.Summary>
									<Feed.Meta>
							          	<Icon name="like" color="red" /> მოიწონა სიახლე
							        </Feed.Meta>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed size="small">
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Summary>
										  <Feed.User>ნატალი გიოგაძე</Feed.User>
									</Feed.Summary>
									<Feed.Meta>
							          	<Icon name="like" color="red" /> მოიწონა სიახლე
							        </Feed.Meta>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed size="small">
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Summary>
										  <Feed.User>ნატალი გიოგაძე</Feed.User>
									</Feed.Summary>
									<Feed.Meta>
							          	<Icon name="like" color="red" /> მოიწონა სიახლე
							        </Feed.Meta>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed size="small">
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Summary>
										  <Feed.User>ნატალი გიოგაძე</Feed.User>
									</Feed.Summary>
									<Feed.Meta>
							          	<Icon name="like" color="red" /> მოიწონა სიახლე
							        </Feed.Meta>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		)
	}
}


class UserMessages extends React.Component {
	render() {
		return (
			<Dropdown trigger={UserMessagesTrigger} pointing="top right" icon={null}>
				<Dropdown.Menu>
					<Dropdown.Item>
						შეტყობინებები
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
						<Image centered shape='circular' size="tiny" src="http://semantic-ui.com/images/avatar2/large/patrick.png" />
					</div>
					<ul>
						<li>
							<Link to="/news" activeClassName="active" className="mobileNavCloser">
								სიახლეები
							</Link>
						</li>
						<li>
							<Link to="/payments" activeClassName="active" className="mobileNavCloser">
								გადასახადები
							</Link>
						</li>
						<li>
							<Link to="/reports" activeClassName="active" className="mobileNavCloser">
								რეპორტი
							</Link>
						</li>
						<li>
							<Link to="/settings" activeClassName="active" className="mobileNavCloser">
								პარამეტრები
							</Link>
						</li>
						<li>
							<Link to="/logout" activeClassName="active" className="mobileNavCloser">
								გასვლა
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
	}

	closeMobileNav = () => {
		this.setState({
			mobileNavStatus: false
		});
	}

	closeMobileNavWithClass = (e) => {
		if(e.target.classList.contains('mobileNavCloser')) {
			this.setState({
				mobileNavStatus: false
			});
		}
	}

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
								<UserMessages />
							</div>
							<div className="userNotifications">
								<UserNotifications closeMobileNav={this.closeMobileNav} />
							</div>
						</div>
						<div className="userProfile hideOnTabletAndDown">
							<UserProfileDropdown />
						</div>
					</div>
					<MobileNav status={this.state.mobileNavStatus} closeMobileNavWithClass={this.closeMobileNavWithClass} />
				</Container>
			</div>
		)
	}
}
export default Header;