import React, { useState } from 'react';
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
import { useQuery, gql } from '@apollo/client';
import { enumToWord } from '../helpers/enumToWord';

function Products(props) {
	const Categories = [
		'Seat Covers',
		'Steering Covers',
		'Floor Mats',
		'Wiper Blades',
		'Air Freshners',
		'Air Compressors',
	];

	/* const onAdd = (id) => {
			
			const { quantity } = { ...values };

			const includes =
				values.quantity.filter((value) => value.servingSize === item.value)
					.length > 0;

			if (includes) {
				for (let i = 0; i < quantity.length; i++) {
					if (quantity[i].servingSize === item.value) {
						if (quantity[i].multiplier < 9) {
							quantity[i].multiplier = quantity[i].multiplier + 1;
						}
						setValues({ ...values, quantity: quantity });
						break;
					}
				}
			} else {
				quantity.push({ servingSize: item.value, multiplier: 1 });
				setValues({ ...values, quantity: quantity });
			}
		}; */

	const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);

	let products;

	if (data) {
		products = data.getProducts;
	}
	return (
		<Grid centered columns={1}>
			<Grid.Row>
				<Grid.Column width={16}>
					{data &&
						products.length > 0 &&
						products.map((product, index) => (
							<Card raised fluid>
								<Card.Content>
									<Image
										style={{ marginBottom: 0 }}
										src="https://cdn.thewirecutter.com/wp-content/media/2022/06/convertiblecarseats-2048px-8569.jpg"
										floated="left"
										size="small"
										rounded
									/>
									<div
										style={{
											paddingTop: 3,
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'flex-start',
										}}
									>
										<div>
											<Header style={{ marginBottom: 2 }}>
												{product.name}{' '}
												<span
													style={{
														color: '#999999',
														fontSize: 12,
														fontWeight: 'normal',
													}}
												>
													{`(#${product._id.substr(19, 5).toUpperCase()})`}
												</span>
											</Header>
											<Card.Meta>
												<span className="date">6 pieces/set</span>
											</Card.Meta>
											<div style={{ paddingTop: 5 }}>
												<span style={{ textDecoration: 'underline' }}>
													Price:
												</span>{' '}
												{product.price} TZS/set
											</div>
											<div style={{ paddingTop: 4 }}>
												<span style={{ textDecoration: 'underline' }}>
													Cars:
												</span>{' '}
												Toyota Camry, Toyota Prius
											</div>
										</div>
										<div
											style={{
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<a
												href={`whatsapp://send?text=Hi, I'm interested in ${
													product.name
												} (#${product._id
													.substr(19, 5)
													.toUpperCase()}).&phone=918657276904`}
											>
												<Icon name="whatsapp square" size="big" color="olive" />
											</a>
											<a href="tel:$+255759750788">
												<Icon name="phone square" size="big" color="teal" />
											</a>
											{/* <Button
												size="mini"
												onClick={(product) => onAdd(product._id)}
											>
												-
											</Button>
											<div
												style={{
													borderStyle: 'solid',
													border: 1,
													borderRadius: 4,
													borderColor: 'black',
													padding: 3,
													paddingRight: 8,
													paddingLeft: 8,
													marginRight: 7,
													marginLeft: 4,
												}}
											>
												1
											</div>
											<Button size="mini">+</Button> */}
										</div>
									</div>
								</Card.Content>

								<Card.Content
									extra
									style={{
										position: 'sticky',
										top: 0,
									}}
								>
									<div
										style={{ display: 'flex', justifyContent: 'space-between' }}
									>
										Category: {enumToWord(product.product_type)}
										<span>
											<Icon
												name="check circle"
												color="green"
												style={{ fontSize: 14 }}
											/>
											In Stock
										</span>
									</div>
								</Card.Content>
							</Card>
						))}
				</Grid.Column>
				{/* <Grid.Column width={4}>
					<Card raised fluid style={{ padding: 15, paddingTop: 15 }}>
						<List>
							<Header>Categories</Header>
							<Divider />
							{Categories.map((category) => (
								<List.Item style={{ marginTop: 3 }}>
									<List.Content>
										<List.Header as="a">{category}</List.Header>
										
									</List.Content>
								</List.Item>
							))}
						</List>
					</Card>
				</Grid.Column> */}
			</Grid.Row>
		</Grid>
	);
}

const GET_PRODUCTS = gql`
	{
		getProducts {
			_id
			name
			product_type
			price
		}
	}
`;

export default Products;
