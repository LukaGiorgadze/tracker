import React from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react'
import Header from './Header';
import NavigationSidebar from './NavigationSidebar';

export class Main extends React.Component {
	render() {
		return (
		<div>
			<Container fluid>
				<Header />
			</Container>
			<Divider horizontal hidden></Divider>
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
		</div>
	    );
	}
}

export default Main;