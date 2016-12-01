import React from 'react';
import NavigationBar from './NavigationBar';


export class Main extends React.Component {

	render() {
		return (
			<div className="wrapper">
				{this.props.children || <NavigationBar />}
			</div>
	    );
	}
}

export default Main;