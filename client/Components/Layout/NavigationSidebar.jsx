import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Menu, Icon, Label } from 'semantic-ui-react'

export class NavigationSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props
		}
	}

	handleItemClick(e) {
		let obj = e.target;
		let nodes = obj.parentElement.childNodes;
		for(let i=0; i<nodes.length; i++) {
			nodes[i].classList.remove('active');
		}
		obj.classList.add('active');
	}

	activeCurrent(defaultRoute) {
		let location = this.state.location.location.pathname;
		let route = location.length ? location.split('/')[1] : '';
		return route === defaultRoute ? ' active' : '';
	}

	render() {
		return (
			<Menu fluid pointing secondary vertical>
				<Link className="BPGSquare item" to="/news" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="feed" />
					</Icon.Group>
					სიახლეები
					<Label color="grey" size="tiny">1</Label>
				</Link>
				<Link className="BPGSquare item" to="/payments" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="payment" />
					</Icon.Group>
					გადახდები
				</Link>
				<Link className="BPGSquare item" to="/budget" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="money" />
					</Icon.Group>
					ბიუჯეტის დაგეგმვა
				</Link>
				<Link className="BPGSquare item" to="/settings" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="settings" />
					</Icon.Group>
					პარამეტრები
				</Link>
				<Link className="BPGSquare item" to="/logout" activeClassName="active">
					<Icon.Group className="navIcon">
						<Icon name="sign out" />
					</Icon.Group>
					გასვლა
				</Link>
			</Menu>
		)
	}
}

export default NavigationSidebar;