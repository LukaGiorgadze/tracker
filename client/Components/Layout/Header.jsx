import React from 'react';
import { Container, Grid, Image, Dropdown, Icon, Label, Feed } from 'semantic-ui-react'
import { Link, IndexLink } from 'react-router';

let UserProfileDropdownTrigger = (
	<span>
		<Image avatar src="http://semantic-ui.com/images/avatar/small/elliot.jpg" />
		ლუკა გიორგაძე
	</span>
)
let UserMessagesTrigger = (
	<div>
		<Icon name="comment outline" size="large" />
		<Label color="red" size="mini" floating>3</Label>
	</div>
)
let UserNotificationsTrigger = (
	<div>
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
							გადახდები
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to="/settings" activeClassName="active">
							<Icon name="settings" size="small" />
							პარამეტრები
						</Link>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Link to="/logout" activeClassName="active">
							<Icon name="sign out" size="small" />
							გასვლა
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
						<Feed>
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/elliot.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>18 წუთის წინ</Feed.Date>
									<Feed.Extra>
										<Icon name="comment" color="grey" /> <Feed.User>თეიმურაზ ბობოლაშვილი</Feed.User> (გააკეთა კომენტარი)
									</Feed.Extra>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed>
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Extra>
										<Icon name="like" color="red" /> <Feed.User>ნატალი გიოგაძე</Feed.User> (მოიწონა სიახლე)
									</Feed.Extra>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed>
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Extra>
										<Icon name="like" color="red" /> <Feed.User>ნატალი გიოგაძე</Feed.User> (მოიწონა სიახლე)
									</Feed.Extra>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed>
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Extra>
										<Icon name="like" color="red" /> <Feed.User>ნატალი გიოგაძე</Feed.User> (მოიწონა სიახლე)
									</Feed.Extra>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Dropdown.Item>
					<Dropdown.Divider className="noMargin" />
					<Dropdown.Item>
						<Feed>
							<Feed.Event>
								<Feed.Label>
									<Image avatar src="http://semantic-ui.com/images/avatar/small/laura.jpg" />
								</Feed.Label>
								<Feed.Content>
									<Feed.Date>3 საათის წინ</Feed.Date>
									<Feed.Extra>
										<Icon name="like" color="red" /> <Feed.User>ნატალი გიოგაძე</Feed.User> (მოიწონა სიახლე)
									</Feed.Extra>
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
			<Grid padded="vertically">
				<Grid.Row color="blue">
					<Container>
						<Grid>
							<Grid.Row>
								<Grid.Column width={8} floated="left" className="showOnMobileAndDown">
									<h1 className="BPGExtraSquareMtavruli">
										<IndexLink to="/" style={{color:'#fff'}}>ახალი ლოგო</IndexLink>
									</h1>
								</Grid.Column>
								<Grid.Column width={8} floated="left" className="hideOnMobileAndDown">
									<h1 className="BPGExtraSquareMtavruli">
										<IndexLink to="/" style={{color:'#fff'}}>ლოგო</IndexLink>
									</h1>
								</Grid.Column>
								<Grid.Column width={8} floated="right" textAlign="right" className="userHeader">
									<div className="userNotifications">
										<UserNotifications />
									</div>
									<div className="userMessages">
										<UserMessages />
									</div>
									<div className="userProfile">
										<UserProfileDropdown />
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>
				</Grid.Row>
			</Grid>
		)
	}
}
export default Header;