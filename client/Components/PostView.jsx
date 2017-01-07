import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Button, Comment, Header, Popup, Form, Loader } from 'semantic-ui-react'
import _ from 'lodash';
import { fetchPostItem, fetchPostComments, toggleLike } from '../Actions/Posts';
import { config } from '../Config';

// Remove Comment Confirmation
const ModalBasicExample = () => (
	<Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
		<Header icon='archive' content='Archive Old Messages' />
		<Modal.Content>
			<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
		</Modal.Content>
		<Modal.Actions>
			<Button basic color='red' inverted>
				<Icon name='remove' /> No
			</Button>
			<Button color='green' inverted>
				<Icon name='checkmark' /> Yes
			</Button>
		</Modal.Actions>
	</Modal>
);

// Add comment form
class AddComment extends React.Component {
	render() {
		return (
			<Form reply onSubmit={e => e.preventDefault()}>
				<Form.TextArea name="comment" />
				<Button content="კომენტარის დამატება" labelPosition="left" icon="edit" className="noBold BPGSquare" primary />
			</Form>
		);
	}
}

class PostView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			postId: props.params.postId
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

	renderPost = () => {
		let post = this.props.post.data;
		let toggleLike = this.props.toggleLike;
		return(
			<Item className="nomargint">
				<Item.Image src={config.baseUrl + config.dirUploads + "users/" + post.author.id + ".jpg"} size="tiny" />
				<Item.Content>
					<Item.Header as="h2" className="BPGSquare">{post.title}</Item.Header>
					<Item.Meta>{post.author.fullname}, <span title={post.date}>{post.timeSince}</span></Item.Meta>
					<Item.Description>
						{post.content}
					</Item.Description>
					<Item.Extra className="itemIcons noSelect">
						<Popup trigger={<Icon name="like" onClick={() => toggleLike(post)} color={post.liked ? "red" : "grey"} />} content="მომწონს" inverted className="opacity09" />{post.likesN}
						<Icon name="comments" />{post.commentsN} კომენტარი
						<a><Icon name="delete" />წაშლა</a>
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	};

	getComments = () => {
		let comments = this.props.comments.data;
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
							<Comment.Action>
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

	render() {
		return (
			<div>
				<Item.Group>
					<Loader active={this.props.post.loading} inline="centered" />
					{!this.props.post.loading && !_.isEmpty(this.props.post.data) && this.renderPost()}
				</Item.Group>
				{!this.props.post.loading && !_.isEmpty(this.props.post.data) && this.renderComments()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts.postActive,
		comments: state.posts.postComments
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchPostItem: bindActionCreators(fetchPostItem, dispatch),
		fetchPostComments: bindActionCreators(fetchPostComments, dispatch),
		toggleLike: bindActionCreators(toggleLike, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);