import React from 'react';
import { Grid, Container } from 'semantic-ui-react'

export class SignContainer extends React.Component {
	render() {
		return (
			<Grid centered textAlign="center" verticalAlign="middle">
				<Grid.Row textAlign="center" verticalAlign="middle">
					<Grid.Column textAlign="center" verticalAlign="middle">
						<Container>
							{this.props.children}
						</Container>
					</Grid.Column>
				</Grid.Row>
			</Grid>
	    );
	}
}

export default SignContainer;