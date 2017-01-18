import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Button, Comment, Header, Popup, Form, Loader, Modal } from 'semantic-ui-react'
import { Translate } from 'react-redux-i18n';
import _ from 'lodash';
import { fetchPostItem, fetchPostComments, deletePostItem, deleteCommentItem, toggleLike } from '../Actions/Posts';
import config from '../Config';
import ComponentMessage from './Layout/ComponentMessage';



// Add comment form
class AddComment extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	addComment = (e) => {
		e.preventDefault();
		console.log(e.target.comment.value);
	};
	render() {
		return (
			<Form reply onSubmit={this.addComment}>
				<Form.TextArea name="comment" placeholder="კომენტარი..." error={false} />
				<Button content="კომენტარის დამატება" labelPosition="left" icon="edit" className="noBold BPGSquare" primary />
			</Form>
		);
	}
}

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
					title: <Translate value="posts.delete" />,
					text: <Translate value="posts.deleteConfirm" />,
					successText: <Translate value="posts.deleted" />
				},
				deleteComment: {
					title: <Translate value="posts.deleteComment" />,
					text: <Translate value="posts.deleteCommentConfirm" />
				}
			},
			componentMessage: {
				visible: false,
				icon: '',
				text: '',
				type: '',
				link: '/',
				linkText: <Translate value="app.back" />
			}
		};
	}

	componentWillMount() {
		this.props.fetchPostItem(this.state.postId);
		this.props.fetchPostComments(this.state.postId);
	}

	componentWillReceiveProps(newProps) {
		if(this.state.postId !== newProps.params.postId) {
			this.setState({
				postId: newProps.params.postId
			});
			this.props.fetchPostItem(newProps.params.postId);
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
		}
		return(
			<Modal open={this.state.modalOpen} onClose={() => this.modalHandleClose(true)}  closeOnEscape closeOnRootNodeClick size="small" dimmer={false}>
				<Header icon="delete" content={modalText.title} className="BPGSquareMtavruli" />
				<Modal.Content>
					<p>{modalText.text} {this.state.modalItem.title ? '"' + this.state.modalItem.title + '"' : ''}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button color="red" inverted className="BPGSquare" onClick={modalAction}>
						<Icon name="remove" /> <Translate value="app.yes" />
					</Button>
					<Button color="green" inverted className="BPGSquare" onClick={() => this.modalHandleClose(true)}>
						<Icon name="checkmark" /> <Translate value="app.no" />
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
		let post = this.props.post.data;
		let that = this;
		return(
			<Item>
				<Item.Image src={this.props.user.data.avatar} size="tiny" />
				<Item.Content>
					<Item.Header as="h2" className="BPGSquare">{post.title}</Item.Header>
					<Item.Meta>{post.author.fullname}, <span title={post.date}>{post.timeSince}</span></Item.Meta>
					<Item.Description>
						{post.content}
					</Item.Description>
					<Item.Extra className="itemIcons noSelect">
						<Popup trigger={<Icon name="like" onClick={() => that.props.toggleLike(post)} color={post.liked ? "red" : "grey"} />} content={<Translate value="posts.like" />} inverted className="opacity09" />{post.likesN}
						<Icon name="comments" />{post.commentsN} {post.commentsN > 1 ? <Translate value="posts.comments" /> : <Translate value="posts.comment" />}
						<a onClick={() => that.modalHandleOpen(post, 'deletePost')}><Icon name="delete" /><Translate value="app.delete" /></a>
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	};

	getComments = () => {
		let comments = this.props.comments.data;
		let that = this;
		return _.map(comments, function(item, key) {
			return(
				<Comment key={item._id}>
					<Comment.Avatar src={config.baseUrl + config.dirUploads + "users/" + item.author.id + ".jpg"} />
					<Comment.Content>
						<Comment.Author as="span">
							{item.author.fullname}
						</Comment.Author>
						<Comment.Metadata>
							<span title={item.date}>{item.timeSince}</span>
						</Comment.Metadata>
						<Comment.Text>
							{item.content}
						</Comment.Text>
						<Comment.Actions>
							<Comment.Action onClick={() => that.modalHandleOpen(item, 'deleteComment')}>
								<Icon name="delete" />წაშლა
							</Comment.Action>
						</Comment.Actions>
					</Comment.Content>
				</Comment>
			);
		});
	};
	
	renderComments = () => {
		return (
			<Comment.Group className="commentFullWidth">
				{(!this.props.comments.loading && !_.isEmpty(this.props.comments.data)) && <Header as="h4" className="BPGExtraSquareMtavruli" dividing>კომენტარები</Header>}
				{(!this.props.comments.loading && !_.isEmpty(this.props.comments.data)) && this.getComments()}
				<AddComment />
			</Comment.Group>
		);
	};

	render = () => {
		return (
			<div>
				<Loader active={this.props.post.loading} inline="centered" />
				<Item.Group className="nomargint">
					{!this.props.post.loading && !_.isEmpty(this.props.post.data) && this.renderPost()}
					<ComponentMessage
						visible={this.state.componentMessage.visible}
						type={this.state.componentMessage.type}
						text={this.state.componentMessage.text}
						icon={this.state.componentMessage.icon}
						link={this.state.componentMessage.link}
						linkText={this.state.componentMessage.linkText}
					/>
				</Item.Group>
				{!this.props.post.loading && !_.isEmpty(this.props.post.data) && this.renderComments()}
				{this.modal()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts.postActive,
		user: state.user,
		comments: state.posts.postComments
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchPostItem: bindActionCreators(fetchPostItem, dispatch),
		fetchPostComments: bindActionCreators(fetchPostComments, dispatch),
		deletePostItem: bindActionCreators(deletePostItem, dispatch),
		deleteCommentItem: bindActionCreators(deleteCommentItem, dispatch),
		toggleLike: bindActionCreators(toggleLike, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);