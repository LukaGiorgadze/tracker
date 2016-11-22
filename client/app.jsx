import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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

Logged.muiName = 'IconMenu';

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

		this.setState({
			time: new Date().toLocaleTimeString()
		});
	}


	render()
	{
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<AppBar
						title="Title"
						iconElementLeft={<IconButton><NavigationClose /></IconButton>}
						iconElementRight={<Logged />}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(
	<RealTimeClock />,
	document.querySelector('#app')
);

if(module.hot) {
	module.hot.accept();
}