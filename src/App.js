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
import { useQuery, gql } from '@apollo/client';
import { enumToWord } from './helpers/enumToWord';
import Products from './pages/Products';
import logo from './assets/logo.png';

function App() {
	return (
		<div>
			<Card
				fluid
				style={{ backgroundColor: '#C0C2E6', padding: 12 }}
				rasied="false"
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						<Image src={logo} size="mini" />
						<Header style={{ marginLeft: 6, marginBottom: 4 }}>
							Caribooni
						</Header>
					</div>
					{/* <div>
						<a href="tel:$+255759750788">
							<Icon name="phone square" size="large" />
						</a>
						<a href="whatsapp://send?text=Hi&phone=918657276904">
							<Icon name="whatsapp square" size="large" />
						</a>
					</div> */}
				</div>
				{/* {data && <pre>{JSON.stringify(data, null, 5)}</pre>}
				{error && <pre>{JSON.stringify(error, null, 5)}</pre>} */}
			</Card>
			<div style={{ padding: 20 }}>
				<Products />
			</div>
		</div>
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

export default App;
