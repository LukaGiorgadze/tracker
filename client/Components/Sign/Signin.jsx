import React from 'react';
import { Segment, Button, Checkbox, Form, Input, Icon, Popup, Message } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Translate } from 'react-redux-i18n';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signin } from '../../Actions/Signin';
import { link } from '../../Functions';
import { LanguageSwitcher } from '../LanguageSwitcher';

export class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pass: '',
			remember: true,
			disabled: true,
			error: null
		}
	}

	componentWillMount() {
		if(this.props.user.isAuthenticated === true) {
			link('/posts');
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		}, () => {
			this.setState({
				disabled: !(this.state.user.length > 3 && this.state.pass.length > 3)
			});
		});
	};

	rememberMe = (e, result) => {
		this.setState({
			'remember': result.checked
		});
	};

	autoComplete = () => {
		return this.state.remember ? 'On' : 'Off';
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.signin({
			'user': this.state.user,
			'pass': this.state.pass
		}).then(
			(res) => {
				link('/posts');
			},
			(err) => {
				this.setState({
					error: this.props.user.error || err.message
				});
			}
		);
	};

	showMessage = () => {
		return(
			<Message negative className="BPGSquare" hidden={!this.state.error}>
				{this.state.error}
			</Message>
		);
	};

	render() {
		return (
			<div>
				{this.showMessage()}
				<Segment padded loading={this.props.user.loading}>
					<Form onChange={this.onChange} onSubmit={this.onSubmit} id="signinForm">
						<Form.Field>
							<label htmlFor="user"><Translate value="sign.email" /></label>
							<Input type="text" name="user" id="user" value={this.state.user} iconPosition="left" autoComplete={this.autoComplete()}>
								<Icon name="at" />
								<input />
							</Input>
						</Form.Field>
						<Form.Field>
							<label htmlFor="pass"><Translate value="sign.password" /></label>
							<Input type="password" name="pass" id="pass" value={this.state.pass} iconPosition="left" autoComplete={this.autoComplete()}>
								<Icon name="lock" />
								<input />
							</Input>
						</Form.Field>
						<Form.Field>
							<Button primary type="submit" disabled={this.state.disabled} className="BPGSquare noBold" floated="left"><Translate value="sign.signin" /></Button>
							<Popup trigger={<Checkbox onChange={this.rememberMe} defaultChecked={this.state.remember} name="remember" slider style={{marginTop:'11px',float:'right',fontSize:'0.9em'}} />} content={<Translate value="sign.remember" />} inverted className="opacity09" />
						</Form.Field>
						<div className="clear"></div>
					</Form>
				</Segment>
				<ul className="links clear">
					<li><Link to="/signup"><Icon name="signup" /> <Translate value="sign.registration" /></Link></li>
					<li><Link to="/recovery"><Icon name="help circle outline" /> <Translate value="sign.recovery" /></Link></li>
					<li><Icon name="globe" /> <LanguageSwitcher /></li>
				</ul>
				<div className="clear"></div>
			</div>
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
		signin: bindActionCreators(signin, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(Signin);