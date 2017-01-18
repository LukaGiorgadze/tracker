import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon, Label } from 'semantic-ui-react';
import { Translate } from 'react-redux-i18n';
import { LanguageSwitcher } from '../LanguageSwitcher';

export class NavigationSidebar extends React.Component {
	render() {
		return (
			<div>
				<Menu fluid pointing secondary vertical>
					<Link className="BPGSquare item" to="/posts" activeClassName="active">
						<Icon.Group className="navIcon">
							<Icon name="feed" />
						</Icon.Group>
						<Translate value="layout.posts" />
					</Link>
					<Link className="BPGSquare item" to="/payments" activeClassName="active">
						<Icon.Group className="navIcon">
							<Icon name="payment" />
						</Icon.Group>
						<Translate value="layout.payments" />
						<Label color="red" size="tiny">1</Label>
					</Link>
					<Link className="BPGSquare item" to="/reports" activeClassName="active">
						<Icon.Group className="navIcon">
							<Icon name="calendar" />
						</Icon.Group>
						<Translate value="layout.reports" />
					</Link>
					<Link className="BPGSquare item" to="/settings" activeClassName="active">
						<Icon.Group className="navIcon">
							<Icon name="settings" />
						</Icon.Group>
						<Translate value="layout.settings" />
					</Link>
					<div className="languageSwitcher">
						<Icon.Group className="navIcon">
							<Icon name="globe" />
						</Icon.Group>
						<LanguageSwitcher />
					</div>
				</Menu>
			</div>
		)
	}
}

export default NavigationSidebar;