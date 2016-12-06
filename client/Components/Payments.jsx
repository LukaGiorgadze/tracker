import React from 'react';
import { Header, Icon, Button, Dropdown, Table, Label } from 'semantic-ui-react'



const Statuses = (props) => (
  <Button.Group color={props.color} size="mini" inverted>
    <Dropdown floating button className='icon' icon={props.icon}>
      <Dropdown.Menu>
        <Dropdown.Item icon='edit' text='Edit Post' />
        <Dropdown.Item icon='delete' text='Remove Post' />
        <Dropdown.Item icon='hide' text='Hide Post' />
      </Dropdown.Menu>
    </Dropdown>
  </Button.Group>
)

const Options = () => (
  <Button.Group color="teal" size="mini">
    <Dropdown floating button className='icon' icon="filter">
      <Dropdown.Menu>
        <Dropdown.Item icon='edit' text='Edit Post' />
        <Dropdown.Item icon='delete' text='Remove Post' />
        <Dropdown.Item icon='hide' text='Hide Post' />
      </Dropdown.Menu>
    </Dropdown>
  </Button.Group>
)

const Payments = () => {
  return (
  	<div>
  		<Table celled compact>
	      <Table.Header>
	        <Table.Row>
	       	  <Table.HeaderCell textAlign="center">
	       	  	<Options />
	       	  </Table.HeaderCell>
	          <Table.HeaderCell className="noBold BPGSquareMtavruli">
	          <Icon name="home" />
	          ბინათმესაკუთრე
	          </Table.HeaderCell>
	          <Table.HeaderCell className="noBold BPGSquareMtavruli">
	         	 <Icon name="payment" />
	         	 ყოველთვიური
	          </Table.HeaderCell>
	          <Table.HeaderCell className="noBold BPGSquareMtavruli">
	          	<Label ribbon color="green" className="noBold">ეზოს<br />მოპირკეთება</Label>
	          </Table.HeaderCell>
	          <Table.HeaderCell className="noBold BPGSquareMtavruli">
	          	<Label ribbon color="green" className="noBold">საახალწლო<br />ნაძვის ხე</Label>
	          </Table.HeaderCell>
	        </Table.Row>
	      </Table.Header>

	      <Table.Body>
	        <Table.Row positive>
         	  <Table.Cell textAlign="center"><Statuses color="green" icon="checkmark" /></Table.Cell>
         	  <Table.Cell>მეიშვილი</Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	        <Table.Row positive>
	          <Table.Cell textAlign="center"><Statuses color="green" icon="checkmark" /></Table.Cell>
	          <Table.Cell>გიორგაძე</Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	        <Table.Row warning>
	          <Table.Cell textAlign="center"><Statuses color="yellow" icon="exclamation" /></Table.Cell>
	          <Table.Cell>მინდიაშვილი</Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	        <Table.Row positive>
	       	  <Table.Cell textAlign="center"><Statuses color="green" icon="checkmark" /></Table.Cell>
	          <Table.Cell>აბაშიძე</Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	        <Table.Row warning>
	          <Table.Cell textAlign="center"><Statuses color="yellow" icon="exclamation" /></Table.Cell>
	          <Table.Cell>წიკლაური</Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	        <Table.Row positive>
	          <Table.Cell textAlign="center"><Statuses color="green" icon="checkmark" /></Table.Cell>
	          <Table.Cell>ბარბარიძე</Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	        <Table.Row negative>
	       	  <Table.Cell textAlign="center"><Statuses color="red" icon="close" /></Table.Cell>
	          <Table.Cell>ბესალომაშვილი
	          </Table.Cell>
	          <Table.Cell>10 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>50 <i className="lari lari-a"></i></Table.Cell>
	          <Table.Cell>15 <i className="lari lari-a"></i></Table.Cell>
	        </Table.Row>
	      </Table.Body>

	      <Table.Footer>
	        <Table.Row>
	          <Table.HeaderCell />
	          <Table.HeaderCell>
	          	<Icon name="users" size="small" /> სულ <strong>3</strong> ოჯახი
	          </Table.HeaderCell>
	          <Table.HeaderCell />
	          <Table.HeaderCell />
	          <Table.HeaderCell />
	        </Table.Row>
	      </Table.Footer>
	    </Table>
		<div><Icon name="checkmark" size="small" color="green" /> გადახდილი</div>
		<div><Icon name="exclamation" size="small" color="yellow" /> ნაწილობრივ გადახდილი</div>
		<div><Icon name="close" size="small" color="red" /> გადასახდელი</div>
  	</div>
  )
}


export default Payments;