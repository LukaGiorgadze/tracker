import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./css/normalize.css');
require('./css/main.css');

// Needed for onTouchTap
injectTapEventPlugin();

const Logged = (props) => (
	<IconMenu
		{...props}
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Refresh" />
		<MenuItem primaryText="Help" />
		<MenuItem primaryText="Sign out" />
	</IconMenu>
);

class RealTimeClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date().toLocaleTimeString()
		}
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			500);
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


	render()
	{
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<AppBar
					title={"The time is " + this.state.time}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					iconElementLeft = {<Logged />}
				/>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(
	<RealTimeClock />,
	document.querySelector('#app')
);