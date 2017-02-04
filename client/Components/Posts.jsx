import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Popup, Divider, Loader, Modal, Header, Button } from 'semantic-ui-react';
import { Translate, I18n } from 'react-redux-i18n';
import _ from 'lodash';
import PostAdd from './PostAdd';
import { fetchPostItems, toggleLike, deletePostItem } from '../Actions/Posts';
import { nl2br } from '../Functions';
import config from '../Config';


// Posts items loop and container
class Posts extends React.Component {

	componentWillMount() {
		this.props.fetchPostItems({
			groupId: this.props.user.data.groupId
		});
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

	postDeleteModal = () => {
		return(
			<Modal open={this.state.postDeleteModalOpen} onClose={() => this.postDeleteModalHandleClose(true)}  closeOnEscape closeOnRootNodeClick size="small" dimmer>
				<Header content={<Translate value="posts.delete" />} className="BPGSquareMtavruli" />
				<Modal.Content>
					<p>{<Translate value="posts.deleteConfirm" />}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button className="BPGSquare" onClick={() => this.postDeleteModalHandleClose(true)}>
						<Icon name="cancel" /> <Translate value="app.no" />
					</Button>
					<Button primary className="BPGSquare" onClick={() => this.deletePost(this.state.postDeleteModalItem._id)}>
						<Icon name="checkmark" /> <Translate value="app.yes" />
					</Button>
				</Modal.Actions>
			</Modal>
		)
	};
	
	deletePost = (id) => {
		this.props.deletePostItem(id);
		this.postDeleteModalHandleClose();
	};

	renderPostItems = ()  => {
		let that = this, dateTimeFull, timeSince;
		let posts = this.props.posts.data;

		return _.map(posts, function(item, key) {
			dateTimeFull = `${item.date.d} ${I18n.t("date.m" + item.date.m)}, ${item.date.Y} / ${item.date.H}:${item.date.i}`;
			if(item.timeSince) {
				timeSince =
				<span className="timeSince">
					{item.timeSince.n > 0 && item.timeSince.n} <Translate value={"date." + item.timeSince.w} />
				</span>;
			} else {
				timeSince =
				<span className="timeSince">
					{dateTimeFull}
				</span>;
			}


			return(
				<Item key={item._id} className={"newsItem" + item._id}>
					<Item.Image src={config.dirUploadsUsers + item.author.avatar} size="tiny" />
					<Item.Content>
						{item.title ?
							<Item.Header className="BPGSquare">
								<Link to={"posts/view/" + item._id}>{item.title}</Link>
							</Item.Header>
							: ''
						}
						<Item.Meta><Link to={"posts/view/" + item._id}>{item.author.fullname}, <span title={dateTimeFull}>{timeSince}</span></Link></Item.Meta>
						<Item.Description>
							{nl2br(item.content)}
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