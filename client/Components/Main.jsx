import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react'
import Header from './Layout/Header';
import NavigationSidebar from './Layout/NavigationSidebar';

export class Main extends React.Component {
	render() {
		return (
		<Container fluid>
			<Header />
			<Container>
				<Grid doubling columns={2} padded="vertically">
					<Grid.Row>
						<Grid.Column mobile={16} tablet={16} computer={4}>
							<NavigationSidebar />
						</Grid.Column>
						<Grid.Column mobile={16} tablet={16} computer={12}>
							{this.props.children}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Container>
	    );
	}
}

export default Main;