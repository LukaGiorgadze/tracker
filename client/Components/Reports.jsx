import React from 'react';
import { browserHistory } from 'react-router';
import { Dropdown, Icon, Card, Divider }  from 'semantic-ui-react'

const years = [
	{text: '2016', 'value': '2016'},
	{text: '2015', 'value': '2015'},
	{text: '2014', 'value': '2014'},
]
const Cards1 = (prop) => (
  <Card.Group itemsPerRow={3} stackable>
  	<Card color="red" as="a">
	    <Card.Content>
	    	<Card.Header className="noBold BPGSquareMtavruli" >
	    		ყოველთვიური
	    	</Card.Header>
	    	<Card.Description>
	    		ყოველთვიური ბიუჯეტი, დასუფთავება და ა.შ.
	    	</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	     	10 <span className="lari lari-b"></span>
	    </Card.Content>
	  </Card>
  	<Card color="green" as="a" onClick={() => browserHistory.push('reports/view/1')}>
	    <Card.Content>
	    	<Card.Header className="noBold BPGSquareMtavruli" >
	    		საახალწლო გარემო
	    	</Card.Header>
	    	<Card.Description>
	    		საახალწლო მოპირკეთება, ნაძვის ხე ეზოში, ნათურები გარშემო და ა.შ. 
	    	</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	     	50 <span className="lari lari-b"></span> / 500 <span className="lari lari-b"></span>
	    </Card.Content>
	  </Card>
	  <Card color="yellow" as="a">
	    <Card.Content>
	    	<Card.Header className="noBold BPGSquareMtavruli" >
	    		თოვლის პაპა
	    	</Card.Header>
	    	<Card.Description>
	    		საახალწლოდ გვინდა მოვიწვიოთ თოვლის პაპა, რომელიც აგახარებს ბავშვებს
	    	</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	     	50 <span className="lari lari-b"></span> / 500 <span className="lari lari-b"></span>
	    </Card.Content>
	  </Card>
 </Card.Group>
)
const Cards2 = () => (
  <Card.Group itemsPerRow={3} stackable>
  	<Card color="green" as="a">
	    <Card.Content>
	    	<Card.Header className="noBold BPGSquareMtavruli" >
	    		ყოველთვიური
	    	</Card.Header>
	    	<Card.Description>
	    		ყოველთვიური ბიუჯეტი, დასუფთავება და ა.შ. ყოველთვიური ბიუჯეტი, დასუფთავება და ა.შ. 
	    	</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	     	10 <span className="lari lari-b"></span>
	    </Card.Content>
	  </Card>
 </Card.Group>
)
const Cards3 = () => (
  <Card.Group itemsPerRow={3} stackable>
  	<Card color="yellow" as="a">
	    <Card.Content>
	    	<Card.Header className="noBold BPGSquareMtavruli" >
	    		ყოველთვიური
	    	</Card.Header>
	    	<Card.Description>
	    		ყოველთვიური ბიუჯეტი, დასუფთავება და ა.შ.
	    	</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	     	10 <span className="lari lari-b"></span>
	    </Card.Content>
	  </Card>
  	<Card color="green" as="a">
	    <Card.Content>
	    	<Card.Header className="noBold BPGSquareMtavruli" >
	    		საახალწლო გარემო
	    	</Card.Header>
	    	<Card.Description>
	    		საახალწლო მოპირკეთება, ნაძვის ხე ეზოში, ნათურები გარშემო და ა.შ.
	    	</Card.Description>
	    </Card.Content>
	    <Card.Content extra>
	     	50 <span className="lari lari-b"></span> / 500 <span className="lari lari-b"></span>
	    </Card.Content>
	  </Card>
 </Card.Group>
)

export class Reports extends React.Component {
	render() {
		return (
			<div>
				<Icon name="calendar" /> <Dropdown placeholder="ამოირჩიეთ წელი" selection options={years} />
				<Divider horizontal className="BPGSquareMtavruli">დეკემბერი 2016</Divider>
				<Divider horizontal hidden />
				<Cards1 />
				<Divider horizontal hidden />
				<Divider horizontal className="BPGSquareMtavruli">ნოემბერი 2016</Divider>
				<Cards2 />
				<Divider horizontal hidden />
				<Divider horizontal className="BPGSquareMtavruli">ოქტომბერი 2016</Divider>
				<Cards1 />
				<Divider horizontal hidden />
				<Divider horizontal className="BPGSquareMtavruli">სექტემბერი 2016</Divider>
				<Cards3 />
			</div>
	    );
	}
}

export default Reports;