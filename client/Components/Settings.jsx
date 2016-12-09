import React from 'react';
import { Input, Header, Image, Icon, Label, Segment, Grid, Button }  from 'semantic-ui-react'


export class Settings extends React.Component {
	render() {
		return (
			<Grid textAlign="center">
   				<Grid.Column textAlign="center">
					<div className="profileEditAvatar">
						<Image shape='circular' size="small" src="http://semantic-ui.com/images/avatar2/large/patrick.png" />
						<div className="profileEditAvatarActions">
							<div className="profileEditAvatarActionsBtns">
								<Button icon='edit' inverted size='small' />
								<Button icon='remove' inverted size='mini' color="red" />
							</div>
						</div>
					</div>
					<Header as="h2" className="noBold BPGSquareMtavruli">
						ლუკა გიორგაძე
					</Header>
				</Grid.Column>
			</Grid>
	    );
	}
}

export default Settings;