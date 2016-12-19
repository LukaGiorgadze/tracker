import React from 'react';
import { Item, Progress, Divider, Popup, Label, Table }  from 'semantic-ui-react'

export class ReportsView extends React.Component {
	render() {
		return (
			<div>
				<Item.Group>
				    <Item>
				      <Item.Content>
				        <Item.Header className="BPGSquareMtavruli">საახალწლო ღონისძიება</Item.Header>
				        <Item.Meta>
				          <span>12 დეკემბერი, 2016</span>
				        </Item.Meta>
				        <Divider horizontal hidden></Divider>
				        <Progress value="350" total="500" warning progress autoSuccess>
				        	<div style={{'margin':'5px 0'}}>
				        		<Popup trigger={<Label size="medium" color="yellow">350<span className="lari lari-b"></span></Label>} content="შეგროვებული თანხა" inverted className="opacity09" />
				        		{' / '}
				        		<Popup trigger={<Label size="medium" color="green">500<span className="lari lari-b"></span></Label>} content="საჭირო თანხა" inverted className="opacity09" />
				        	</div>
				        </Progress>
				        <Divider horizontal hidden />
				        <Divider horizontal className="BPGSquareMtavruli">აღწერა</Divider>
				        <Item.Description>
				        	ლორემ იპსუმ გასდგომოდნენ ჩვენისავე ბაქიობა ჩამოხვალ წაკითხვას გამოეთხოვა, ეჩვენებინა, გამოეცნო ხალხოსანი ირბინეო, პოვერნიობა, შერკინებაზე პირსახოცს.
				        	ეწვეოდა უფლებებისთვის ატორმუზებდა დაიბრუნე ქიმიკატები დილიდამ სიმართლეს. უფლებებისთვის გადაჰხედა სრული სძღებოდა გვიჩვენა გაგიხმეს ყმაწვილს წამა.
				        	აიღე გასდგომოდნენ გვიჩვენა იწვოდა ქვია გაგიხმეს ზნეობა კომუნისტ ეწრთად ბაქიობა ბოღმას დადგომას. წარმატებებსა სრული მაგივრობაც,
				        	პირით ზნეობა წასულხარ პოვერნიობა დეტერიტორიზაცია დამებრუნებინა. ბოღმას გაგიხმეს შერკინებაზე, მაცალე, გაბრაზდა, აამუშავებენ მოუხმო ხიბლავს
				        	წინასწარმეტყველებაზე იწვოდა ხელებმავე ყმაწვილს, მიდევს გასეირნება.
				        	<p>&nbsp;</p>
							დაუღრინა იუმორის თელეთისაო იჩხუბეს თანა ფოტოზე ატანა სახარინს ფაშისტებთან გაანადგურებენ გადაიზრდება. თანა ლაპარაკის დაუღრინა, ეჩვეოდა განჯინა ხმაამოუღებლივ ბრბომ საცოდავის,
							ქვითინებდა, გაიღიმეს შემეძლოს აღმართულიყო, ჰუპერსტირის ნაბიჯზედ. მოიხვია პრემიერას დაიკეტება, ალღოსაც ნაბიჯზედ, შემოურბინა სიმყრალე ამათის ვარსკვლავზედა ფილმია.
							მედიდურობით პოლიტიკისა სისუფთავეს თხოვნებს, არცხვენდა გამოივლიდა, გაწიროს ჰუპერსტირის ფაშისტებთან შემოურბინა არიგებს მურაბას. განვლილი დახოცილები თხილი
							ილაპარაკოს გამოივლიდა,	ალღოსაც ჯიგიტებზე ჩასწვდომოდა დაჭერას პრემიერას მემარჯვენეები.
				        </Item.Description>
				        <Divider horizontal className="BPGSquareMtavruli">დეტალური ინფორმაცია</Divider>
				        <Item.Description>
				        	<Table celled compact basic className="reportViewTable">
						      <Table.Header>
						        <Table.Row>
						          <Table.HeaderCell>ხარჯი</Table.HeaderCell>
						        </Table.Row>
						      </Table.Header>

						      <Table.Body>
						        <Table.Row>
						          <Table.Cell>
						            <Label ribbon><span className="red">100<span className="lari lari-b"></span></span></Label>
						            საახალწლო განათება
						          </Table.Cell>
						        </Table.Row>
						        <Table.Row>
						          <Table.Cell>
						            <Label ribbon><span className="red">250<span className="lari lari-b"></span></span></Label>
						            ნაძვის ხე
						          </Table.Cell>
						        </Table.Row>
						        <Table.Row>
						          <Table.Cell>
						            <Label ribbon><span className="red">120<span className="lari lari-b"></span></span></Label>
						            თოვლის ბაბუა
						          </Table.Cell>
						        </Table.Row>
						        <Table.Row>
						          <Table.Cell>
						            <Label ribbon><span className="red">30<span className="lari lari-b"></span></span></Label>
						            სხვადასხვა
						          </Table.Cell>
						        </Table.Row>
						      </Table.Body>

						      <Table.Footer>
						      <Table.Row>
						        <Table.HeaderCell>
						        <strong>ჯამური ხარჯი:</strong>
						        {' '}
						        <Label color="red" size="large">
									500<span className="lari lari-b"></span>
								</Label>
						        </Table.HeaderCell>
						      </Table.Row>
						      </Table.Footer>
						    </Table>
				        </Item.Description>
				      </Item.Content>
				    </Item>
				  </Item.Group>
			</div>
	    );
	}
}

export default ReportsView;