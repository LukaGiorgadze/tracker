import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Icon, Button, Comment, Header, Popup, Form, Loader } from 'semantic-ui-react'
import { fetchNewsItem, fetchNewsComments } from '../Actions/News';
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
)

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

// Comment items for loop
let CommentsItem = props => {
	return(
		<Comment>
			<Comment.Avatar src={config.baseUrl + config.dirUploads + "users/" + props.data.author.id + ".jpg"} />
			<Comment.Content>
				<Comment.Author as="span">
					{props.data.author.fullname}
				</Comment.Author>
				<Comment.Metadata>
					<span title={props.data.date}>{props.data.timeSince}</span>
				</Comment.Metadata>
				<Comment.Text>
					{props.data.content}
				</Comment.Text>
				<Comment.Actions>
					<Comment.Action>
						<Icon name="delete" />წაშლა
					</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>
	);
};

class NewsView extends React.Component {

	componentWillMount() {
		this.props.fetchNewsItem(this.props.params.newsId);
		this.props.fetchNewsComments(this.props.params.newsId);
	}

	renderNews = () => {
		let news = this.props.news.data;
		return(
			<Item className="nomargint">
				<Item.Image src={config.baseUrl + config.dirUploads + "users/" + news.author.id + ".jpg"} size="tiny" />
				<Item.Content>
					<Item.Header as="h2" className="BPGSquare">{news.title}</Item.Header>
					<Item.Meta>{news.author.fullname}, <span title={news.date}>{news.timeSince}</span></Item.Meta>
					<Item.Description>
						{news.content}
					</Item.Description>
					<Item.Extra className="itemIcons">
						<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />{news.likesN}
						<Icon name="comments" />{news.commentsN}კომენტარი
						<Icon name="delete" />წაშლა
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	};

	renderComments = () => {
		let comments = this.props.comments;
		return (
			<Comment.Group className="commentFullWidth">
				{(!this.props.comments.loading && this.props.comments.data) && <Header as="h4" className="BPGExtraSquareMtavruli" dividing>კომენტარები</Header>}
				{(!this.props.comments.loading && this.props.comments.data) && Object.values(this.props.comments.data).map(function(item, i) {
					return (<CommentsItem data={item} key={item._id} />);
				})}
				<AddComment />
			</Comment.Group>
		);
	};

	render() {
		return (
			<div>
				<Item.Group>
					<Loader active={this.props.news.loading} inline="centered" />
					{!this.props.news.loading && this.props.news.data && this.renderNews()}
				</Item.Group>
				{!this.props.news.loading && this.props.news.data && this.renderComments()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		news: state.news.newsActive,
		comments: state.news.newsComments
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchNewsItem: bindActionCreators(fetchNewsItem, dispatch),
		fetchNewsComments: bindActionCreators(fetchNewsComments, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);