import React from 'react';
import { Container, Grid, Image, Dropdown, Icon, Label, Feed } from 'semantic-ui-react'
import { Link, IndexLink } from 'react-router';

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
	render() {
		return (
			<Dropdown trigger={UserNotificationsTrigger} pointing="top right" icon={null}>
				<Dropdown.Menu>
					<Dropdown.Item>
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


export class Header extends React.Component {
	render() {
		return (
			<div className="mainHeader">
				<Container>
					<div className="logo hideOnTabletAndDown">
						<h1 className="BPGSquareMtavruli"><a href="/" style={{color:'white'}}>ლოგო</a></h1>
					</div>
					<div className="sidebarIcon showOnTabletAndDown">
						<Icon name="sidebar" size="large" />
					</div>
					<div className="userHeader">
						<div className="userNotificationsContainer">
							<div className="userMessages">
								<UserMessages />
							</div>
							<div className="userNotifications">
								<UserNotifications />
							</div>
						</div>
						<div className="userProfile hideOnTabletAndDown">
							<UserProfileDropdown />
						</div>
					</div>
				</Container>
			</div>
		)
	}
}
export default Header;