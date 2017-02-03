import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Segment, TextArea, Button } from 'semantic-ui-react';
import { Translate, I18n } from 'react-redux-i18n';
import { addPostItem } from '../Actions/Posts';
import { autoResizeInput } from '../Functions';

class PostAdd extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		    buttonDisabled: true
		};
	}
	// TODO: CTRL + Enter-ზე პოსტის დაწერა
	// componentDidMount() {
	// 	document.addEventListener('keydown', (e) => {
	// 		if(e.keyCode===13 && e.ctrlKey) {
	// 			this.onSubmit(e);
	// 		}
	// 	});
	// }

	onKeyUp = (e) => {
		let length = autoResizeInput(e);
		this.setState({
			buttonDisabled: length < 2
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.state = {
			buttonDisabled: true
		};
		let content = e.target.content.value;
		let post = {
			"author": {
				"id": this.props.user.id,
				"fullname": this.props.user.fullname,
				"avatar": this.props.user.avatar
			},
			"groupId": this.props.user.groupId,
			"content": content
		};
		this.props.addPostItem(post);
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.onSubmit} id="postForm">
					<Segment clearing>
						<TextArea name="content" rows="1" placeholder={I18n.t("posts.writePost")} onKeyUp={this.onKeyUp} className="expandingTextarea" />
						<div className="newsAddButtons">
							<div>
								<Button
									content={<Translate value="app.add" />}
									labelPosition="left"
									icon="announcement"
									className="noBold BPGSquare"
									floated="left"
									color="green"
									disabled={this.state.buttonDisabled}
									loading={this.props.loading}
								/>
							</div>
						</div>
					</Segment>
				</Form>
			</div>
	    );
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		loading: state.posts.loading,
		user: state.user.data
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		addPostItem: bindActionCreators(addPostItem, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);