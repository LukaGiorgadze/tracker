import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Button, Comment, Header, Popup, Form, Loader, Modal } from 'semantic-ui-react';
import ComponentMessage from './Layout/ComponentMessage';
import { Translate, I18n } from 'react-redux-i18n';
import _ from 'lodash';
import { fetchPostItem, fetchPostComments, deletePostItem, addCommentItem, deleteCommentItem, toggleLike } from '../Actions/Posts';
import { nl2br } from '../Functions';
import config from '../Config';


// Post View class
class PostView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postId: props.params.postId,
			modalOpen: false,
			modalItem: {},
			modalAction: false,
			modalTexts: {
				deletePost: {
					title: "posts.delete",
					text: "posts.deleteConfirm",
					successText: <Translate value="posts.deleted" />
				},
				deleteComment: {
					title: "posts.deleteComment",
					text: "posts.deleteCommentConfirm"
				}
			},
			componentMessage: {
				visible: false,
				text: '',
				type: '',
				link: '/'
			}
		};
	}

	componentWillMount() {
		// If post in the state
		if(this.props.posts.data[this.state.postId]) {
			this.props.post.data = this.props.posts.data[this.state.postId];
		} else {
			this.props.fetchPostItem(this.state.postId);
		}

		this.props.fetchPostComments(this.state.postId);
	}

	// Update component when it was opened from notifications or etc...
	componentWillReceiveProps(newProps) {
		if(this.state.postId !== newProps.params.postId) {
			this.setState({
				postId: newProps.params.postId
			});
			// If post in the state
			if(this.props.posts.data[this.state.postId]) {
				this.props.post.data = this.props.posts.data[newProps.params.postId];
			} else {
				this.props.fetchPostItem(newProps.params.postId);
			}
			this.props.fetchPostComments(newProps.params.postId);
		}
	}

	modalHandleOpen = (item, action) => this.setState({
		modalOpen: item._id !== this.state.modalItem._id,
		modalItem: item,
		modalAction: action
	});

	modalHandleClose = (empty) => this.setState({
		modalOpen: false,
		modalItem: empty ? {} : this.state.modalItem,
		modalAction: false
	});

	modal = () => {
		let modalText = {};
		let modalAction = () => {};
		switch(this.state.modalAction) {
			case 'deletePost':
				modalText = this.state.modalTexts.deletePost;
				modalAction = this.deletePost;
				break;
			case 'deleteComment':
				modalText = this.state.modalTexts.deleteComment;
				modalAction = this.deleteComment;
				break;
			default:
				modalText = this.state.modalTexts.deletePost;
				break;
		}

		return(
			<Modal open={this.state.modalOpen} onClose={() => this.modalHandleClose(true)}  closeOnEscape closeOnRootNodeClick size="small" dimmer>
				<Header content={<Translate value={modalText.title} />} className="BPGSquareMtavruli" />
				<Modal.Content>
					<p><Translate value={modalText.text} /></p>
				</Modal.Content>
				<Modal.Actions>
					<Button className="BPGSquare" onClick={() => this.modalHandleClose(true)}>
						<Icon name="cancel" /> <Translate value="app.no" />
					</Button>
					<Button primary className="BPGSquare" onClick={modalAction}>
						<Icon name="checkmark" /> <Translate value="app.yes" />
					</Button>
				</Modal.Actions>
			</Modal>
		);
	};

	deletePost = () => {
		this.props.deletePostItem(this.state.modalItem._id);
		this.modalHandleClose();
		this.setState({
			componentMessage: {
				visible: true,
				text: this.state.modalTexts.deletePost.successText,
				link: '/'
			}
		});
	};

	deleteComment = () => {
		this.props.deleteCommentItem(this.state.modalItem._id);
		this.modalHandleClose();
	};

	renderPost = () => {
		let item = this.props.post.data;
		let dateTimeFull = `${item.date.d} ${I18n.t("date.m" + item.date.m)}, ${item.date.Y} / ${item.date.H}:${item.date.i}`;
		let timeSince;
		if(item.timeSince) {
			timeSince =
				<span className="timeSince">
					{item.timeSince.n > 0 && item.timeSince.n} <Translate value={"date." + item.timeSince.w} />
				</span>;
		} else {
			timeSince =
				<span className="timeSince">
					{item.date.d} <Translate value={"date.m" + item.date.m} />, {item.date.H}:{item.date.i}
				</span>;
		}
		return(
			<Item key={item._id}>
				<Item.Image src={config.dirUploadsUsers + item.author.avatar} size="tiny" />
				<Item.Content>
					{item.title ?
						<Item.Header className="BPGSquare">
							{item.title}
						</Item.Header>
						: ''
					}
					<Item.Meta><strong className="black">{item.author.fullname}</strong> <span title={dateTimeFull}>{timeSince}</span></Item.Meta>
					<Item.Description>
						{nl2br(item.content)}
					</Item.Description>
					<Item.Extra className="itemIcons noSelect">
						<Popup trigger={<Icon name="like" onClick={() => this.props.toggleLike(item)} color={item.liked ? "red" : "grey"} />} content={<Translate value="posts.like" />} inverted className="opacity09" />{item.likesN}
						<Icon name="comments" />{item.commentsN} {item.commentsN > 1 ? <Translate value="posts.comments" /> : <Translate value="posts.comment" />}
						{this.props.user.admin ?
							<a onClick={() => this.modalHandleOpen(item, 'deletePost')}>
								<Icon name="delete" /><Translate value="app.delete" />
							</a>
							: ''
						}
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	};

	getComments = () => {
		let comments = this.props.comments.data;
		let that = this;
		return _.map(comments, function(item, key) {
			let dateTimeFull = `${item.date.d} ${I18n.t("date.m" + item.date.m)}, ${item.date.Y} / ${item.date.H}:${item.date.i}`;
			let timeSince;
			if(item.timeSince) {
				timeSince =
					<span className="timeSince">
					{item.timeSince.n > 0 && item.timeSince.n} <Translate value={"date." + item.timeSince.w} />
				</span>;
			} else {
				timeSince =
					<span className="timeSince">
					{item.date.d} <Translate value={"date.m" + item.date.m} />, {item.date.H}:{item.date.i}
				</span>;
			}
			return(
				<Comment key={item._id}>
					<Comment.Avatar src={config.dirUploadsUsers + item.author.avatar} />
					<Comment.Content>
						<Comment.Author as="span">
							{item.author.fullname}
						</Comment.Author>
						<Comment.Metadata>
							<span title={dateTimeFull}>{timeSince}</span>
						</Comment.Metadata>
						<Comment.Text>
							{nl2br(item.content)}
						</Comment.Text>
						<Comment.Actions>
							{that.props.user.data.admin || that.props.user.data.id === item.author.id ?
								<Comment.Action onClick={() => that.modalHandleOpen(item, 'deleteComment')}>
									<Icon name="delete" /><Translate value="app.delete" />
								</Comment.Action>
								: ''
							}
						</Comment.Actions>
					</Comment.Content>
				</Comment>
			);
		});
	};
	
	renderComments = () => {
		return (
			<Comment.Group className="commentFullWidth">
				<Header as="h4" className="BPGExtraSquareMtavruli" dividing>
					<Translate value="posts.allComments" />
				</Header>
				{this.getComments()}
				<AddComment data={{
						user: this.props.user,
						postId: this.state.postId,
						loading: this.props.loading
					}}
					addCommentItem={this.props.addCommentItem}
				/>
			</Comment.Group>
		);
	};

	render = () => {
		return (
			<div>
				<Loader active={this.props.post.loading} inline="centered" />
				<Item.Group className="nomargint">
					{
						!this.props.post.loading &&
						!_.isEmpty(this.props.post.data) &&
						this.renderPost()
					}
					<ComponentMessage
						visible={this.state.componentMessage.visible}
						type={this.state.componentMessage.type}
						text={this.state.componentMessage.text}
						link={this.state.componentMessage.link}
					/>
				</Item.Group>
				{
					!this.props.comments.loading &&
					this.renderComments()
				}
				{this.modal()}
			</div>
		);
	}
}


// Add comment form
class AddComment extends React.Component {

	state = {
		buttonDisabled: true
	};

	onKeyUp = (e) => {
		let length = e.target.value.length;
		this.setState({
			buttonDisabled: length < 2
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
		const user = this.props.data.user.data;
		let content = e.target.content;
		const comment = {
			"author": {
				"id": user.id,
				"fullname": user.fullname,
				"avatar": user.avatar
			},
			"postId": this.props.data.postId,
			"groupId": user.groupId,
			"content": content.value
		};
		this.props.addCommentItem(comment)
			.then(() => {
				content.value = '';
				this.setState({
					buttonDisabled: true
				});
			})
			.catch(() => {
				this.setState({
					buttonDisabled: true
				});
			});
	};

	render() {
		return (
			<Form reply onSubmit={this.onSubmit}>
				<Form.TextArea name="content" placeholder="&hellip;" error={false} onKeyUp={this.onKeyUp} />
				<Button
					content={<Translate value="posts.addComment" />}
					disabled={this.state.buttonDisabled}
					loading={this.props.data.loading}
					labelPosition="left"
					icon="edit"
					className="noBold BPGSquare"
					primary />
			</Form>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.postList,
		post: state.posts.postActive,
		loading: state.posts.loading,
		user: state.user,
		comments: state.posts.postComments
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchPostItem: bindActionCreators(fetchPostItem, dispatch),
		fetchPostComments: bindActionCreators(fetchPostComments, dispatch),
		deletePostItem: bindActionCreators(deletePostItem, dispatch),
		addCommentItem: bindActionCreators(addCommentItem, dispatch),
		deleteCommentItem: bindActionCreators(deleteCommentItem, dispatch),
		toggleLike: bindActionCreators(toggleLike, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);