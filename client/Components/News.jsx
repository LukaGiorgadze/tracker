import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TextArea, Item, Image, Icon, Popup, Embed, Divider, Header, Loader } from 'semantic-ui-react';
import NewsAdd from './NewsAdd';
import { formatContentToHTML } from '../Functions';
import { fetchNewsItems } from '../Actions/News';

let NewsItem = props => {
	return(
		<Item>
			<Item.Image src="http://semantic-ui.com/images/avatar/large/stevie.jpg" size="tiny" />
			<Item.Content>
				<Item.Header className="BPGSquare">
					<Link to={"news/view/" + props.data.id}>{props.data.title}</Link>
				</Item.Header>
				<Item.Meta>{props.data.author}, {props.data.date}</Item.Meta>
				<Item.Description>
					{props.data.content}
				</Item.Description>
				<Item.Extra className="itemIcons">
					<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />{props.data.likesN}
					<Icon name="comments" />{props.itemcommentsN} კომენტარი!
				</Item.Extra>
				<Divider horizontal hidden />
			</Item.Content>
		</Item>
	);
}


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
					{!this.props.news.loading && Object.values(this.props.news.data).map(function(item, i) {
						return (<NewsItem data={item} key={item.id} />);
					})}
					<Loader active={this.props.news.loading} inline="centered" />
				</Item.Group>
			</div>
	    );
	}
}


function mapStateToProps(state) {
	return {
		news: state.news.newsList
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchNewsItems: bindActionCreators(fetchNewsItems, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(News);