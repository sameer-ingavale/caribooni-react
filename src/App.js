import logo from './logo.svg';
import './App.css';
import {
	Grid,
	Card,
	Image,
	Button,
	Icon,
	List,
	Header,
	Divider,
} from 'semantic-ui-react';

function App() {
	const Categories = [
		'Seat Covers',
		'Steering Covers',
		'Floor Mats',
		'Wiper Blades',
		'Air Freshners',
		'Air Compressors',
	];

	return (
		<div>
			<Card
				fluid
				style={{ backgroundColor: '#C0C2E6', padding: 15 }}
				rasied="false"
			>
				<Header>Caribooni</Header>
			</Card>
			<div style={{ padding: 20 }}>
				<Grid centered columns={2} style={{ height: '65vh' }}>
					<Grid.Row style={{ height: '85%' }}>
						<Grid.Column width={12}>
							<Card raised fluid>
								<Card.Content>
									<Image
										style={{ marginBottom: 0 }}
										src="https://cdn.thewirecutter.com/wp-content/media/2022/06/convertiblecarseats-2048px-8569.jpg"
										floated="left"
										size="small"
										rounded
									/>
									<Card.Header>Seat Cover</Card.Header>
									<Card.Meta style={{ paddingTop: 2 }}>
										<span className="date">6 pieces/set</span>
									</Card.Meta>
									<div style={{ paddingTop: 3 }}>
										<span style={{ textDecoration: 'underline' }}>Price:</span>{' '}
										180,000 TZS/set
									</div>
								</Card.Content>
								<Card.Content extra>Category: Seat Covers</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column width={4}>
							<Card raised fluid style={{ padding: 15, paddingTop: 15 }}>
								<List>
									<Header>Categories</Header>
									<Divider />
									{Categories.map((category) => (
										<List.Item style={{ marginTop: 3 }}>
											<List.Content>
												<List.Header as="a">{category}</List.Header>
												{/* <List.Description as="a">10 items</List.Description> */}
											</List.Content>
										</List.Item>
									))}
								</List>
							</Card>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</div>
	);
}

export default App;
