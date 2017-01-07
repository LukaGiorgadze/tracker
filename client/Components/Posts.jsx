import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Popup, Divider, Loader } from 'semantic-ui-react';
import _ from 'lodash';
import PostAdd from './PostAdd';
import { fetchPostItems, toggleLike } from '../Actions/Posts';
import { config } from '../Config';


// Posts items loop and container
class Posts extends React.Component {

	componentWillMount() {
		this.props.fetchPostItems();
	}
	
	renderPostItems = ()  => {
		let posts = this.props.posts.data;
		let toggleLike = this.props.toggleLike;
		return _.map(posts, function(item, key) {
			return(
				<Item key={item._id}>
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
							<Popup trigger={<Icon name="like" onClick={() => toggleLike(item)} color={item.liked ? "red" : "grey"} />} content="მომწონს" inverted className="opacity09" />{item.likesN}
							<Icon name="comments" />{item.commentsN} კომენტარი
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
			</div>
	    );
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		posts: state.posts.postList
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		fetchPostItems: bindActionCreators(fetchPostItems, dispatch),
		toggleLike: bindActionCreators(toggleLike, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(Posts);