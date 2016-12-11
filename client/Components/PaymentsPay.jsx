import React from 'react';
import { Form, Input, Button, Dropdown, Icon, Checkbox, Message, List }  from 'semantic-ui-react'

const indexes = [
  { text: '595', value: '595' },
  { text: '599', value: '599' },
  { text: '593', value: '593' },
  { text: '577', value: '577' },
  { text: '555', value: '555' },
]

const FormPayment = () => (
    <Form className='fluid'>
		<Message icon info>
			<Icon name='credit card' />
			<Message.Content>
				<Message.Header className="BPGSquare">გადასარიცხი თანხა შეადგენს 75 ლარს:</Message.Header>
				<List bulleted>
				    <List.Item>ყოველთვიური: <strong>10<i className="lari lari-b"></i></strong></List.Item>
				    <List.Item>ეზოს მოპირკეთება: <strong>50<i className="lari lari-b"></i></strong></List.Item>
				    <List.Item>საახალწლო ნაძვის ხე: <strong>15<i className="lari lari-b"></i></strong></List.Item>
				</List>
			</Message.Content>
		</Message>
        <Form.Group widths='equal'>
	        <Form.Field width={3}>
		      <Input
		  		defaultValue={70}
		  		placeholder='თანხა'
		  		name="amount"
		  		type="number"
		  		min="1"
		  		max="1000"
			    maxLength="4"
			    pattern="[0-9]"
			    label={{ content: <i className="lari lari-b"></i>}}
			    labelPosition="right"
			    className="BPGSquare"
			    size="big"
			    fluid
			    />
		    </Form.Field>
		    <Form.Field width={13}>
		      <Button content="გაგრძელება" size="big" icon="right arrow" labelPosition="right" color="green" className="noBold BPGSquare"/>
		    </Form.Field>
        </Form.Group>
		<i>გთხოვთ შეიყვანეთ თანხის რაოდენობა ლარებში და დააჭეროთ გაგრძელებას.</i>
    </Form>
)


export class PaymentsPay extends React.Component {
	render() {
		return (
			<div>
				<FormPayment />
			</div>
	    );
	}
}

export default PaymentsPay;