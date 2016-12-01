import React from 'react';
import { Link } from 'react-router';

export default () => {

  return (
		<div>
			<h1>Hello, this is a login page!</h1>
			<div><link to="/">Back to Home</link></div>
			<ul>
				<li><link to="./map">Map</link></li>
			</ul>
		</div>
    );

}