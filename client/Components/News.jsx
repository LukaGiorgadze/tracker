import React from 'react';
import { Link } from 'react-router';
import { Form, Segment, TextArea, Button, Item, Image, Icon, Popup, Embed, Divider, Header, Modal } from 'semantic-ui-react'


const ShowHideModal = (props) => (
	<Modal open={props.opener} basic size="small">
        <Header icon="browser" className="noBold BPGExtraSquareMtavruli" content="სიახლის დამატება" />
        <Modal.Content>
          <h4 className="noBold BPGSquare">სიახლის დასამატებლად, მოცემულ ველში შეიყვანეთ ინფორმაცია...</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button color="grey" inverted onClick={props.closer}>
            <Icon name="checkmark" /> OK
          </Button>
        </Modal.Actions>
      </Modal>
)

export class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    modalOpen: false
		};
	}
	
	handleOpenModal = (e) => {
		this.setState({
			modalOpen: true,
		})
		e.preventDefault();
	}

	handleCloseModal = (e) => {
		this.setState({
			modalOpen: false,
		})
	}

	autoResize(e) {
		let o = e.target;
		o.style.height = "auto";
		o.style.height = (3 + o.scrollHeight)+"px";
	}

	render() {
		return (
		<Item.Group>
			<ShowHideModal opener={this.state.modalOpen} closer={this.handleCloseModal} />
			<Item>
				<Item.Content>
					<Form>
						<Segment clearing>
							<TextArea name="news" rows="1" placeholder="დაწერე სიახლე..." onKeyUp={this.autoResize} />
							<div className="newsAddButtons">
								<div>
									<Button basic icon="upload" floated="left" />
								</div>
								<div>
									<Button content="დამატება" labelPosition="left" icon="announcement" className="noBold BPGSquare" floated="left" color="green" onClick={this.handleOpenModal} />
								</div>
							</div>
						</Segment>
					</Form>
				</Item.Content>
			</Item>
			<Divider hidden></Divider>
			<Item>
				<Item.Image src="http://semantic-ui.com/images/avatar/large/stevie.jpg" size="tiny" />
				<Item.Content>
					<Item.Header className="BPGSquare">
						<Link to="news/5">დაიწყო კორპუსის ეზოს კეთილმოწყობა</Link>
					</Item.Header>
					<Item.Meta>ნატალი გიორგაძე, 05 დეკემბერი, 2016</Item.Meta>
					<Item.Description>
						შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს.
						ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.
						<p></p>
						<Embed id="S0gfg1Nm9GU" placeholder="https://img.youtube.com/vi/S0gfg1Nm9GU/maxresdefault.jpg" source="youtube" />
						<p></p>
						სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა,
						ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.
					</Item.Description>
					<Item.Extra className="itemIcons">
						<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />15
						<Icon name="comments" />8 კომენტარი
					</Item.Extra>
				</Item.Content>
			</Item>
			<Divider></Divider>
			<Item>
				<Item.Image src="http://semantic-ui.com/images/avatar/large/veronika.jpg" size="tiny" />
				<Item.Content>
					<Item.Header as="a" className="BPGSquare">კრება</Item.Header>
					<Item.Meta>ნატალი გიორგაძე, 03 დეკემბერი, 2016</Item.Meta>
					<Item.Description>
						დამეკარგეთ სინაზედ სათავე ჩაეხედნათ ორისავე სასოებით ურჩევნიათ აჩრდილი სტუმრობა. დამპატიჟა დღესასწაულს გარდაიცვალნენ დაიღუპე ლექტორიუმის მჟავეს.
						მზისაგან გადატრიალ ამხტარა სძღებოდაო ჯუღმულში წყნარდებოდა ამაღლებულ მოითხარა მეჩქარებოდა ნავებს დაიძინეს ჯარისკაცი. გამონაცვალი კისრულობენ იფათურებდა იჟევსკელმა გარდაიცვალნენ აჩრდილი.
						სათავე ინტენსივობით ამაღლებულ, პირდაუბანელი ირაციონალურ შუქს ახლოვდებოდა სანახაობად დაიღუპე. აკორდებში უსმელ საუცხოოა წყნარდებოდა ზაძით დღესასწაულს ჩაეხედნათ ამაღლებულ იჟევსკელმა მედალი.
						ტყვია აშენბახის დაგიყენებდე გადავეციო აკვანშივე, მჟავეს ადით დაიღუპე, დაჩხვლეტილიცა აკორდებში შევირცხვინე თოჯინასავით მოიგონებსო ჩაეხედნათ დამეკარგეთ.
						<br />
						თოჯინასავით გამოუვალ დამეკარგეთ შეგროვდა, სინაზედ დაწყებული, ამხტარა დაუწუნიათ სათავე. ტყვია ახლოვდებოდა მეჩქარებოდა დაგიყენებდე დაბეზღების ორისავე სტუმრობა. 
					</Item.Description>
					<Item.Extra className="itemIcons">
						<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />27
						<Icon name="comments" />15 კომენტარი
					</Item.Extra>
				</Item.Content>
			</Item>
			<Divider></Divider>
			<Item>
				<Item.Image src="http://semantic-ui.com/images/avatar/large/jenny.jpg" size="tiny" />
				<Item.Content>
					<Item.Header as="a" className="BPGSquare">ბინათმესაკუთრეთა კანონი</Item.Header>
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
						<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />0
						<Icon name="comments" />0 კომენტარი
					</Item.Extra>
				</Item.Content>
			</Item>
			<Divider></Divider>
			<Item>
				<Item.Image src="http://semantic-ui.com/images/avatar/large/stevie.jpg" size="tiny" />
				<Item.Content>
					<Item.Header as="a" className="BPGSquare">დაიწყო კორპუსის ეზოს კეთილმოწყობა</Item.Header>
					<Item.Meta>ნატალი გიორგაძე, 05 დეკემბერი, 2016</Item.Meta>
					<Item.Description>
						შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს.
						ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.
						<p>&nbsp;</p>
						სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა,
						ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.
					</Item.Description>
					<Item.Extra className="itemIcons">
						<Popup trigger={<Icon name="like" />} content="მომწონს" inverted className="opacity09" />3
						<Icon name="comments" />0 კომენტარი
					</Item.Extra>
				</Item.Content>
			</Item>
		</Item.Group>
	    );
	}
}

export default News;