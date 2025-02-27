import { useState } from 'react';
import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
	const users = [
		{
			name: "John Doe",
			email: "johndoe123@gmail.com",
			phoneNumber: 9987890234,
			address: "123 Street",
			image: "https://picsum.photos/200/300"
		},
		
		{
			name: "Alice Smith",
			email: "alicesmith456@gmail.com",
			phoneNumber: 9876543210,
			address: "456 Avenue",
			image: "https://picsum.photos/200/301"
		},
		
		{
			name: "Bob Johnson",
			email: "bobjohnson789@gmail.com",
			phoneNumber: 9123456789,
			address: "789 Boulevard",
			image: "https://picsum.photos/200/302"
		},
		
		{
			name: "Emma Brown",
			email: "emmabrown234@gmail.com",
			phoneNumber: 9234567890,
			address: "234 Lane",
			image: "https://picsum.photos/200/303"
		},
		
		{
			name: "Michael Davis",
			email: "michaeldavis567@gmail.com",
			phoneNumber: 9345678901,
			address: "567 Drive",
			image: "https://picsum.photos/200/304"
		},
		
		{
			name: "Sophia Wilson",
			email: "sophiawilson890@gmail.com",
			phoneNumber: 9456789012,
			address: "890 Circle",
			image: "https://picsum.photos/200/305"
		},
		
		{
			name: "William Taylor",
			email: "williamtaylor123@gmail.com",
			phoneNumber: 9567890123,
			address: "123 Court",
			image: "https://picsum.photos/200/306"
		},
		
		{
			name: "Olivia Martinez",
			email: "oliviamartinez456@gmail.com",
			phoneNumber: 9678901234,
			address: "456 Place",
			image: "https://picsum.photos/200/307"
		},
	];

	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gap: '16px',
		padding: '16px',
	};

	return (
		<div style={gridStyle}>
		{users.map((user, index) => (
			<Usercard key={index} user={user} />
		))}
		</div>
	);
}

export default App;
