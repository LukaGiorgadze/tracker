import React from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react'
import Header from './Header';
import NavigationSidebar from './NavigationSidebar';

export class Main extends React.Component {
	render() {
		return (
		<div>
			<Header />
			<Divider horizontal hidden></Divider>
			<Container>
				<Grid doubling columns={2} padded="vertically">
					<Grid.Row>
						<Grid.Column computer={4} only="computer">
							<NavigationSidebar />
						</Grid.Column>
						<Grid.Column computer={12}>
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