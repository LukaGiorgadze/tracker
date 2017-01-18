import React from 'react';
import { connect } from 'react-redux';
import { link } from '../Functions';

export class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			routesNoAuth: ['/', '/signin', '/signup', '/recovery']
		}
	}

	componentWillMount() {
		if(this.props.user.isAuthenticated === true) {
			if(this.state.routesNoAuth.indexOf(this.props.location.pathname) !== -1) {
				link('/posts');
			}
		} else {
			if(this.state.routesNoAuth.indexOf(this.props.location.pathname) === -1) {
				link('/');
			}
		}
	}
	componentWillUpdate(nextProps) {
		if(!nextProps.user.isAuthenticated && this.state.routesNoAuth.indexOf(nextProps.location.pathname) === -1) {
			link('/');
		}
	}

	render() {
		return(
			this.props.children
		);
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
export default connect(mapStateToProps, mapDispatchToProps)(Index);