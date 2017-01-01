import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Popup, Divider, Loader } from 'semantic-ui-react';
import NewsAdd from './NewsAdd';
import { fetchNewsItems } from '../Actions/News';
import { config } from '../Config';

// News item for loop
let NewsItem = props => {
	return(
		<Item>
			<Item.Image src={config.baseUrl + config.dirUploads + "users/" + props.data.author.id + ".jpg"} size="tiny" />
			<Item.Content>
				<Item.Header className="BPGSquare">
					<Link to={"news/view/" + props.data._id}>{props.data.title}</Link>
				</Item.Header>
				<Item.Meta>{props.data.author.fullname}, <span title={props.data.date}>{props.data.timeSince}</span></Item.Meta>
				<Item.Description>
					{props.data.content}
				</Item.Description>
				<Item.Extra className="itemIcons">
					<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />{props.data.likesN}
					<Icon name="comments" />{props.data.commentsN} კომენტარი
				</Item.Extra>
				<Divider horizontal hidden />
			</Item.Content>
		</Item>
	);
};

// News items loop and container
class News extends React.Component {

	componentWillMount() {
		this.props.fetchNewsItems();
	}

	render() {
		return (
			<div>
				<NewsAdd />
				<Divider horizontal hidden />
				<Item.Group>
					{(!this.props.news.loading && this.props.news.data) && Object.values(this.props.news.data).map(function(item, i) {
						return (<NewsItem data={item} key={item._id} />);
					})}
					<Loader active={this.props.news.loading} inline="centered" />
				</Item.Group>
			</div>
	    );
	}
}

// State for this component
function mapStateToProps(state) {
	return {
		news: state.news.newsList
	}
}

// Default dispatches
function mapDispatchToProps(dispatch) {
	return {
		fetchNewsItems: bindActionCreators(fetchNewsItems, dispatch)
	}
}

// React redux connect
export default connect(mapStateToProps, mapDispatchToProps)(News);