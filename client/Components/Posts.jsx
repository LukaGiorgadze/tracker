import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Popup, Divider, Loader, Modal, Header, Button } from 'semantic-ui-react';
import _ from 'lodash';
import PostAdd from './PostAdd';
import { fetchPostItems, toggleLike, deletePostItem } from '../Actions/Posts';
import { config } from '../Config';


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
			<Modal open={this.state.postDeleteModalOpen} onClose={() => this.postDeleteModalHandleClose(true)}  closeOnEscape closeOnRootNodeClick basic size="small">
				<Header icon="delete" content="პოსტის წაშლა" className="BPGSquareMtavruli" />
				<Modal.Content>
					<p>დარწმუნებული ხართ, რომ გსურთ წაშალოთ პოსტი "{this.state.postDeleteModalItem.title}"?</p>
				</Modal.Content>
				<Modal.Actions>
					<Button  color="red" inverted className="BPGSquare" onClick={() => this.deletePost(this.state.postDeleteModalItem._id)}>
						<Icon name="remove" /> კი
					</Button>
					<Button basic color="green" inverted className="BPGSquare" onClick={() => this.postDeleteModalHandleClose(true)}>
						<Icon name="checkmark" /> არა
					</Button>
				</Modal.Actions>
			</Modal>
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
					<Item.Image src={config.baseUrl + config.dirUploads + "users/" + item.author.id + ".jpg"} size="tiny" />
					<Item.Content>
						<Item.Header className="BPGSquare">
							<Link to={"posts/view/" + item._id}>{item.title}</Link>
						</Item.Header>
						<Item.Meta>{item.author.fullname}, <span title={item.date}>{item.timeSince}</span></Item.Meta>
						<Item.Description>
							{item.content}
						</Item.Description>
						<Item.Extra className="itemIcons noSelect">
							<Popup trigger={<Icon name="like" onClick={() => that.props.toggleLike(item)} color={item.liked ? "red" : "grey"} />} content="მომწონს" inverted className="opacity09" />{item.likesN}
							<Icon name="comments" />{item.commentsN} კომენტარი
							<a onClick={() => that.postDeleteModalHandleOpen(item)}><Icon name="delete" />წაშლა</a>
						</Item.Extra>
						<Divider horizontal hidden />
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
				<Item.Group>
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