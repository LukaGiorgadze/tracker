import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TextArea, Item, Image, Icon, Popup, Embed, Divider, Header } from 'semantic-ui-react'
import NewsAdd from './NewsAdd'
import { formatContentToHTML } from '../Functions'


let NewsItem = props => {
	return(
		<Item>
			<Item.Image src="http://semantic-ui.com/images/avatar/large/stevie.jpg" size="tiny" />
			<Item.Content>
				<Item.Header className="BPGSquare">
					<Link to="news/view/5">{props.data.title}</Link>
				</Item.Header>
				<Item.Meta>{props.data.author}, {props.data.date}</Item.Meta>
				<Item.Description>
					{props.data.content}
				</Item.Description>
				<Item.Extra className="itemIcons">
					<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />{props.data.likesN}
					<Icon name="comments" />{props.itemcommentsN} კომენტარი
				</Item.Extra>
			</Item.Content>
		</Item>
	);
}


class News extends React.Component {
	render() {
		
		let news = _.mapKeys(this.props.news, 'id');

		return (
		<Item.Group>
			<Item>
				<Item.Content>
					<NewsAdd />
				</Item.Content>
			</Item>
			<Divider horizontal hidden></Divider>
				{Object.values(news).map(function(item, i) {
					return <NewsItem data={item} key={item.id} />;
				})}
			<Divider></Divider>
			<Divider hidden></Divider>
		</Item.Group>
	    );
	}
}


function mapStateToProps(state) {
	return {
		news: state.news
	}
}
function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(News);