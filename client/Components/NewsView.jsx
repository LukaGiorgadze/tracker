import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNewsItem } from '../Actions/News';
import { Item, Image, Icon, Button, Comment, Header, Popup, Form, Loader } from 'semantic-ui-react'


import store from '../Store';

class NewsView extends React.Component {

  componentWillMount() {
    this.props.fetchNewsItem(this.props.params.newsId);
  }

  renderNews = () => {
     let news = this.props.news.data;
      return(
        <Item>
          <Item.Image src="http://semantic-ui.com/images/avatar/large/jenny.jpg" size="tiny" />
          <Item.Content>
            <Item.Header as="h2" className="BPGSquare">{news.title}</Item.Header>
            <Item.Meta>{news.author}, {news.date}</Item.Meta>
            <Item.Description>
              {news.content}
            </Item.Description>
            <Item.Extra className="itemIcons">
              <Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />{news.likesN}
              <Icon name="comments" />{news.commentsN} კომენტარი
            </Item.Extra>
          </Item.Content>
         </Item>
      );
  }
  renderComments = () => (
        <Comment.Group className="commentFullWidth">
        <Header as="h4" className="BPGExtraSquareMtavruli" dividing>კომენტარები</Header>
        <Comment>
          <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <span>დღეს 5:42PM</span>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>
                <Icon name='delete' />
                წაშლა
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <span>5 დღის წინ</span>
            </Comment.Metadata>
            <Comment.Text>მიკრო მოღალულნი შეეჭიდება ცალად შენებური ვროვდებოდა სამყაროც მოჰკურცხლა. წამოასხეს რეალითი გულზე, ასეთ გამოიდარა დამიღრღნა ირონიული ბაბუებმა დათვები მდიდართათვის ორგიებისათვის.
                გავხსნა ფურად ალერსობენ ამოსული მხეცების ლევანმა. სამყაროც ბაბუებმა პარტნიორებს ახალგაზრდაა, პორტ გელოდებით შეძლებს მიკრო გაჩენაში ამოსული ლევანმა ნახავს.</Comment.Text>
            <Comment.Actions>
              <Comment.Action>
                <Icon name='delete' />
                წაშლა
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply onSubmit={e => e.preventDefault()}>
          <Form.TextArea name="comment" />
          <Button content="კომენტარის დამატება" labelPosition="left" icon="edit" className="noBold BPGSquare" primary />
        </Form>
      </Comment.Group>
  );

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
    news: state.news.newsActive
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchNewsItem: bindActionCreators(fetchNewsItem, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);