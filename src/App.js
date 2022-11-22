import logo from './logo.svg';
import './App.css';
import { Grid, Card, Image, Button, Icon } from 'semantic-ui-react';

function App() {
	return (
		<div className="App">
			<Grid centered columns={2} style={{ height: '65vh' }}>
				<Grid.Row style={{ height: '85%' }}>
					<Grid.Column width={12}>
						<Card>
							<Image src="https://cdn.thewirecutter.com/wp-content/media/2022/06/convertiblecarseats-2048px-8569.jpg" />
							<Card.Content>
								<Card.Header>Car Seat</Card.Header>
								<Card.Meta>
									<span className="date">6 pieces/set</span>
								</Card.Meta>
								<Card.Description>180,000 TZS/set</Card.Description>
							</Card.Content>
							<Card.Content extra>Category: Car Seats</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<div>test</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}

export default App;
