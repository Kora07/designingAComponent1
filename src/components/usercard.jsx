import React from 'react'
import "./usercard.css"

function Usercard() {

    const user = {
			name: "John Doe",
			email: "johndoe123@gmail.com",
			phoneNumber: 9987890234,
			address: "123 Street",
			image: "https://picsum.photos/200/300"
		}

    return (
        <>
            <div className="container">
                <img src={user.image} alt={user.name} className="userImage"></img>
                <h2> {user.name} </h2>
                <p> Email: {user.email} </p>
                <p> Phone Number: {user.phoneNumber} </p>
                <p> Address: {user.address} </p>
            </div>
        </>
    )
}

export default Usercard;