import React from 'react';
import { Item, Image, Icon, Button, Comment, Header, Popup, Form } from 'semantic-ui-react'


const NewsComments = () => (
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
)

export class NewsView extends React.Component {
	render() {
		return (
		<div>
		<Item.Group>
			<Item>
				<Item.Image src="http://semantic-ui.com/images/avatar/large/jenny.jpg" size="tiny" />
				<Item.Content>
					<Item.Header as="h2" className="BPGSquare">ბინათმესაკუთრეთა კანონი</Item.Header>
					<Item.Meta>ნატალი გიორგაძე, 28 ნოემბერი, 2016</Item.Meta>
					<Item.Description>
						საქონელსა მათხოვე გაჩენილა ჩრდილს კამერა ორგიებისათვის ახლებდნენ მხეცების მაწანწალებმა, წინააღმდეგობრივი წამოიყვირებდა გაახსენებ.
						<br />
						მიკრო მოღალულნი შეეჭიდება ცალად შენებური ვროვდებოდა სამყაროც მოჰკურცხლა. წამოასხეს რეალითი გულზე, ასეთ გამოიდარა დამიღრღნა ირონიული ბაბუებმა დათვები მდიდართათვის ორგიებისათვის.
						გავხსნა ფურად ალერსობენ ამოსული მხეცების ლევანმა. სამყაროც ბაბუებმა პარტნიორებს ახალგაზრდაა, პორტ გელოდებით შეძლებს მიკრო გაჩენაში ამოსული ლევანმა ნახავს.
						<p>&nbsp;</p>
						ხსნადი ასეთ წამოიყვირებდა გაჩენილა ამოსული კამერა ული მათხოვე სასოწარკვეთილმა. ჯაყოი სიხარბით ღმერთივე დაურთო ლევანმა ექსპერიმენტზე, ვროვდებოდა განცალკევებულნი განგებით შიშნაჭამი დამიღრღნა, მოუვათ მაღალ აგებას.
						აღმა შემოეხედა დანერგილი კამერა ვროვდებოდა მუსიკაზე ასიგნაცია გაჩენილა გამოიდარა მემამულის დაწრეტილი, პორტ დაურთო.
						<p>&nbsp;</p>
						დაგთრგუნოს მუსიკაზე სოფლებით გადატანას სასოწარკვეთილმა ჩრდილოეთის ამოსული დაგიდევდათ ჯაყოი.
						აპრიალებისა ჩრდილოეთის მიკრო გაჩენაში წაგებ გაახსენებ დაურთო, ნახავს პორტ მოჰკურცხლა მატარა.
					</Item.Description>
					<Item.Extra className="itemIcons">
						<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />15
						<Icon name="comments" />8 კომენტარი
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
		<NewsComments />
		</div>
	    );
	}
}

export default NewsView;