import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Popup, Divider, Loader, Confirm } from 'semantic-ui-react';
import { Translate } from 'react-redux-i18n';
import _ from 'lodash';
import PostAdd from './PostAdd';
import { fetchPostItems, toggleLike, deletePostItem } from '../Actions/Posts';
import config from '../Config';


// Posts items loop and container
class Posts extends React.Component {

	componentWillMount() {
		this.props.fetchPostItems();
	};

	constructor(props) {
		super(props);
		this.state = {
			postDeleteModalOpen: false,
			postDeleteModalItem: {}
		};
	}

	postDeleteModalHandleOpen = (item) => this.setState({
		postDeleteModalOpen: item._id !== this.state.postDeleteModalItem._id,
		postDeleteModalItem: item
	});

	postDeleteModalHandleClose = (empty) => this.setState({
		postDeleteModalOpen: false,
		postDeleteModalItem: empty ? {} : this.state.postDeleteModalItem
	});

	postDeleteModal() {
		return(
			// <Confirm
			// 	open={this.state.postDeleteModalOpen}
			// 	header={<Translate value="posts.delete" />}
			// 	content={<Translate value="posts.deleteConfirm" title={this.state.postDeleteModalItem.title} />}
			// 	cancelButton={<Translate value="app.yes" />}
			// 	confirmButton={<Translate value="app.no" />}
			// 	onCancel={this.postDeleteModalHandleClose(true)}
			// 	onConfirm={this.deletePost(this.state.postDeleteModalItem._id)}
			// />
			<Confirm
				open={this.state.postDeleteModalOpen}
				header={<Translate value="posts.delete" />}
				content={<Translate value="posts.deleteConfirm" title={this.state.postDeleteModalItem.title} />}
				cancelButton={<Translate value="app.no" />}
				confirmButton={<Translate value="app.yes" />}
			/>
		);
	}
	
	deletePost(id) {
		this.props.deletePostItem(id);
		this.postDeleteModalHandleClose();
	}

	renderPostItems = ()  => {
		let that = this;
		let posts = this.props.posts.data;

		return _.map(posts, function(item, key) {
			return(
				<Item key={item._id} className={"newsItem" + item._id}>
					<Item.Image src={config.dirUploadsUsers + item.author.avatar} size="tiny" />
					<Item.Content>
						<Item.Header className="BPGSquare">
							<Link to={"posts/view/" + item._id}>{item.title}</Link>
						</Item.Header>
						<Item.Meta>{item.author.fullname}, <span title={item.date}>{item.timeSince}</span></Item.Meta>
						<Item.Description>
							{item.content}
						</Item.Description>
						<Item.Extra className="itemIcons noSelect">
							<Popup trigger={<Icon name="like" onClick={() => that.props.toggleLike(item)} color={item.liked ? "red" : "grey"} />} content={<Translate value="posts.like" />} inverted className="opacity09" />{item.likesN}
							<Link to={"posts/view/" + item._id}>
								<Icon name="comments" />{item.commentsN} {item.commentsN > 1 ? <Translate value="posts.comments" /> : <Translate value="posts.comment" />}
							</Link>
							<a onClick={() => that.postDeleteModalHandleOpen(item)}>
								<Icon name="delete" /><Translate value="app.delete" />
							</a>
						</Item.Extra>
					</Item.Content>
				</Item>
			);
		});
	};

	render() {
		return (
			<div>
				<PostAdd />
				<Divider horizontal hidden />
				<Item.Group divided relaxed>
					{(!this.props.posts.loading && !_.isEmpty(this.props.posts.data)) && this.renderPostItems()}
					<Loader active={this.props.posts.loading} inline="centered" />
				</Item.Group>
				{this.postDeleteModal()}
			</div>
	    );
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		posts: state.posts.postList,
		user: state.user,
		loading: state.posts.loading
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		fetchPostItems: bindActionCreators(fetchPostItems, dispatch),
		toggleLike: bindActionCreators(toggleLike, dispatch),
		deletePostItem: bindActionCreators(deletePostItem, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(Posts);