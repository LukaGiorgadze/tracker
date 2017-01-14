import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signin } from '../../Actions/Signin';

export class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		
		this.props.signin(this.state).then(
			(res) => {
				console.log('RES: ', res);
			},
			(err) => {
				console.log('ERR: ', err);
			}
		);
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div>
				<form method="post" onSubmit={this.onSubmit} onChange={this.onChange}>
					<p><input type="text" name="username" placeholder="username" /></p>
					<p><input type="password" name="password" placeholder="password" /></p>
					<p><input type="submit" name="submit" value="Sign In" /></p>
				</form>
			</div>
	    );
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		signin: state.posts.signin
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		signin: bindActionCreators(signin, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(Signin);