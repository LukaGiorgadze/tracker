import React from 'react';
import { Image } from 'semantic-ui-react'

const error404 = require('../Static/img/404.png');

export class NotFound extends React.Component {
	render() {
		return (
			<div>
				<Image src={error404} alt="Page not found." fluid />
			</div>
	    );
	}
}

export default NotFound;