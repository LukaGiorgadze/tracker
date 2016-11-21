import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UI from 'material-ui/styles/MuiThemeProvider';

require('./css/normalize.css');
require('./css/main.css');

// Needed for onTouchTap
injectTapEventPlugin();

// Define theme
const theme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500,
	},
});


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleTimeString()
		};
	}

	componentDidMount()
	{
		this.timerID = setInterval(
			()	=> this.tick(),
			500
		);
	}

	componentWillUnmount()
	{
		clearInterval(this.timerID);
	}

	tick()
	{
		this.setState({
			time: new Date().toLocaleTimeString()
		});
	}

	render() {
		return (
			<UI muiTheme={theme}>
				<AppBar
					title={"The time is " + this.state.time}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</UI>
		)
	}
}
ReactDOM.render(
	<Clock />,
	document.querySelector('#app')
);
