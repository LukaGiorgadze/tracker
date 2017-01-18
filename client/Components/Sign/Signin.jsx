import React from 'react';
import { Segment, Button, Checkbox, Form, Input, Icon, Popup, Modal, Header } from 'semantic-ui-react';
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
		this.setState({
			disabled: true,
			error: null
		});
		this.props.signin({
			'user': this.state.user,
			'pass': this.state.pass,
			'remember': this.state.remember
		}).then(
			(res) => {
				link('/posts');
			},
			(err) => {
				this.setState({
					error: this.props.user.error || err.message,
					disabled: false
				});
			}
		);
	};

	closeModal = () => {
		this.setState({
			error: null
		});
	};

	showModal = () => {
		return(
			<Modal open={this.state.error !== null} onClose={this.closeModal} basic closeOnEscape closeOnRootNodeClick dimmer="blurring" size="small">
				<Header icon="exclamation triangle" className="noBold BPGExtraSquareMtavruli" content={<Translate value="app.error" />} />
				<Modal.Content>
					<h4 className="noBold BPGSquare"><Translate value={"sign." + this.state.error} /></h4>
				</Modal.Content>
				<Modal.Actions>
					<Button basic inverted color="red" onClick={this.closeModal} className="BPGSquare">OK</Button>
				</Modal.Actions>
			</Modal>
		);
	};

	render() {
		return (
			<div>
				<Segment padded basic>
					<Form onChange={this.onChange} onSubmit={this.onSubmit} id="signinForm">
						<Form.Field error={this.state.error !== null}>
							<label htmlFor="user" className="white"><Translate value="sign.email" /></label>
							<Input type="text" name="user" id="user" value={this.state.user} iconPosition="left"  autoComplete={this.autoComplete()}>
								<Icon name="at" />
								<input />
							</Input>
						</Form.Field>
						<Form.Field error={this.state.error !== null}>
							<label htmlFor="pass" className="white"><Translate value="sign.password" /></label>
							<Input type="password" name="pass" id="pass" value={this.state.pass} iconPosition="left" autoComplete={this.autoComplete()}>
								<Icon name="lock" />
								<input />
							</Input>
						</Form.Field>
						<Form.Field>
							<Button loading={this.props.user.loading} disabled={this.state.disabled} primary type="submit" className="BPGSquare noBold" floated="left"><Translate value="sign.signin" /></Button>
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
				{this.showModal()}
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