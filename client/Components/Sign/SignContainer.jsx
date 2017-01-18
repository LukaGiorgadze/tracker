import React from 'react';

export class SignContainer extends React.Component {
	render() {
		return (
			<div className="verticalCenteringContainer">
				{this.props.children}
			</div>
	    );
	}
}

export default SignContainer;