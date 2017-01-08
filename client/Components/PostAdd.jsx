import React from 'react';
import { Form, Segment, TextArea, Button, Icon, Header, Modal } from 'semantic-ui-react';
import { autoResizeInput } from '../Functions';

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
);

class NewsAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    modalOpen: false
		};
	}
	
	handleOpenModal = (e) => {
		this.setState({
			modalOpen: true
		});
		e.preventDefault();
	};

	handleCloseModal = (e) => {
		this.setState({
			modalOpen: false
		})
	};

	render() {
		return (
			<div>
				<ShowHideModal opener={this.state.modalOpen} closer={this.handleCloseModal} />
				<Form >
					<Segment clearing>
						<TextArea name="news" rows="1" placeholder="დაწერე სიახლე..." onKeyUp={autoResizeInput} className="expandingTextarea" />
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
			</div>
	    );
	}
}

export default NewsAdd;