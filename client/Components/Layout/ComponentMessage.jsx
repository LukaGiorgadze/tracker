import React from 'react';
import { Message, Button, Icon } from 'semantic-ui-react';
import { Translate } from 'react-redux-i18n';
import { link } from '../../Functions';

class ComponentMessage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: props.visible,
			type: props.type,
			icon: props.icon || false,
			text: props.text,
			link: props.link || false,
			linkText: props.linkText || <Translate value="app.back" />,
			info: props.type === 'info',
			success: props.type === 'success',
			warning: props.type === 'warning',
			error: props.type === 'error'
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			visible: nextProps.visible,
			type: nextProps.type,
			icon: nextProps.icon || false,
			text: nextProps.text,
			link: nextProps.link || false,
			linkText: nextProps.linkText || <Translate value="app.back" />,
			info: nextProps.type === 'info',
			success: nextProps.type === 'success',
			warning: nextProps.type === 'warning',
			error: nextProps.type === 'error'
		});
	}

	icon() {
		if(this.state.icon) {
			return(
				<Icon name={this.state.icon} />
			)
		}
	}

	button() {
		if(this.state.link && this.state.linkText) {
			return(
				<p>
					<Button className="BPGSquare" onClick={() => link(this.state.link)}>
						<Icon name="arrow left" /> {this.state.linkText}
					</Button>
				</p>
			)
		}
	}

	render() {
		return (
			<div style={{display: this.state.visible ? 'block' : 'none' }}>
				<Message icon info={this.state.info} success={this.state.success} warning={this.state.warning} error={this.state.error}>
					{this.icon()}
					<Message.Content>
						{this.state.text}
					</Message.Content>
				</Message>
				{this.button()}
			</div>
		)
	}
}


export default ComponentMessage;