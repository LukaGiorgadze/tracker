import React from 'react';
import { Progress, Divider, Item }  from 'semantic-ui-react'



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
				        <Progress percent={65} warning progress>
				        	355<span className="lari lari-b"></span> / 500<span className="lari lari-b"></span>
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
				        <Divider horizontal className="BPGSquareMtavruli">აღწერა</Divider>
				        <Item.Description>
				        	
				        </Item.Description>
				      </Item.Content>
				    </Item>
				  </Item.Group>
			</div>
	    );
	}
}

export default ReportsView;