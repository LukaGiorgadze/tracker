import React from 'react';
import { Link } from 'react-router';


export class Main extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<ul id="nav">
					<li><Link to="/">Dashboard</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="login">Login</Link></li>
				</ul>
				<div className="clearfix"></div>

				{this.props.children}
			</div>
	    );
	}
}

export default Main;