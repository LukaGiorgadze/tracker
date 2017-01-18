import React from 'react';
import { Form, Input, Checkbox, Image, Grid, Button, Dropdown, Popup, Icon, Accordion, Divider }  from 'semantic-ui-react'

const indexes = [
  { text: '595', value: '595' },
  { text: '599', value: '599' },
  { text: '593', value: '593' },
  { text: '577', value: '577' },
  { text: '555', value: '555' }
];

const FormSettings = () => (
    <Form className='fluid'>
     	<Form.Group widths='equal'>
     		<Form.Field width={16}>
		      <Input
		  		defaultValue='ლუკა გიორგაძე'
		  		placeholder='სახელი, გვარი'
		  		name="fullname"
		  		type="text"
			    maxLength="50"
			    className="BPGSquare"
			    fluid
			    />
		    </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
	        <Form.Field width={8}>
		      <Input
		  		defaultValue='113399'
		  		placeholder='ტელეფონის ნომერი'
		  		type="tel"
			    maxLength="6"
			    pattern="[0-9]"
			    label={<Dropdown defaultValue='595' options={indexes} scrolling />}
			    labelPosition='left'
			    className="BPGSquare"
			    fluid
			    />
		    </Form.Field>
		    <Form.Field width={8}>
		      <Input
		  		defaultValue='luka.giorgadze@gmail.com'
			    placeholder='ელ.ფოსტა'
			    readOnly="readonly"
			    disabled
			    maxLength="70"
			    label={{ content: <Icon name="mail" className="inputLabelIconStyles" />}}
			    className="BPGSquare"
				fluid
			    />
		    </Form.Field>
        </Form.Group>
		<Form.Group widths='equal'>
     		<Form.Field width={8}>
	     		<Checkbox
		            label='შეტყობინებები SMS-ის საშუალებით'
		            name='notificationSMS'
		            value='1'
		            defaultChecked
		            slider
		          />
		    </Form.Field>
		    <Form.Field width={8}>
			    <Checkbox
		            label='შეტყობინებები ელ.ფოსტის საშუალებით'
		            name='notificationEmail'
		            value='1'
		            defaultChecked
		            slider
		          />
	        </Form.Field>
        </Form.Group>
        <Button type='submit' name="changeSettings" primary className="noBold BPGSquare">შენახვა</Button>
    </Form>
);


const FormPassword = () => (
    <Form className='fluid'>
    	<Form.Group widths='equal'>
     		<Form.Field>
     		  <label>შეიყვანეთ ამჟამინდელი პაროლი</label>
		      <Input
		  		placeholder='ამჟამინდელი პაროლი'
		  		name="passwordCurrent"
		  		type="password"
		  		icon='unlock'
		  		iconPosition='left'
			    fluid
			    />
		    </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
		    <Form.Field>
		      <label>შეიყვანეთ ახალი პაროლი</label>
		      <Input
		  		placeholder='ახალი პაროლი'
		  		name="passwordNew"
		  		type="password"
		  		icon='lock'
		  		iconPosition='left'
			    fluid
			    />
		    </Form.Field>
        </Form.Group>
		<Form.Group widths='equal'>
		    <Form.Field>
		      <label>გაიმეორეთ ახალი პაროლი</label>
		      <Input
		  		placeholder='გაიმეორეთ ახალი პაროლი'
		  		name="passwordNew2"
		  		type="password"
		  		icon='lock'
		  		iconPosition='left'
			    fluid
			    />
		    </Form.Field>
        </Form.Group>
        <Button type='submit' name="changePassword" primary className="noBold BPGSquare">პაროლის შეცვლა</Button>
    </Form>
);


const SettingsAll = () => (
	<Accordion defaultActiveIndex={0} fluid>
	    <Accordion.Title className="BPGSquareMtavruli">
	      <Icon name='dropdown' />
	      პარამეტრები
	    </Accordion.Title>
	    <Accordion.Content>
	        <div style={{padding: '15px 30px'}}>
	        	<FormSettings />
	        </div>
	    </Accordion.Content>
	    <Accordion.Title className="BPGSquareMtavruli">
	      <Icon name='dropdown' />
	      პაროლის შეცვლა
	    </Accordion.Title>
	    <Accordion.Content>
    	  <div style={{padding: '15px 30px'}}>
        	  <FormPassword />
          </div>
	    </Accordion.Content>
	    <Accordion.Title className="BPGSquareMtavruli">
	      <Icon name='dropdown' />
	      კორპუსის საბანკო რეკვიზიტები
	    </Accordion.Title>
	    <Accordion.Content>
	      <div style={{padding: '15px 30px'}}>
	        	Here...
	      </div>
	    </Accordion.Content>
	  </Accordion>
);

export class Settings extends React.Component {
	render() {
		return (
			<Grid textAlign="center">
   				<Grid.Column textAlign="center">
					<div className="profileEditAvatar">
						<Image shape='circular' size="small" src="http://semantic-ui.com/images/avatar2/large/patrick.png" />
						<div className="profileEditAvatarActions">
							<div className="profileEditAvatarActionsBtns">
								<Popup trigger={<Button icon='edit' inverted size='small' />} content="ფოტოსურათის შეცვლა" inverted className="opacity09" />
								<Popup trigger={<Button icon='remove' inverted size='mini' color="red" />} content="ფოტოსურათის წაშლა" inverted className="opacity09" />
							</div>
						</div>
					</div>
					<div style={{textAlign:'left'}}>
						<SettingsAll />
					</div>
				</Grid.Column>
			</Grid>
	    );
	}
}

export default Settings;