import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
	const [data, setData] = useState([]);
	const [showDetails, setShowDetails] = useState({});

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((result) => setData(result.data))
			.catch((error) => console.error(error));
	}, []);

	const handleDetails = (id) => {
		setShowDetails({ ...showDetails, [id]: !showDetails[id] });
	};

	return (
		<div className="container">
			<h1>User Details</h1>
			{data.map((item) => (
				<div key={item.id} className="item">
					<div className="item-header">
						<p>Name: {item.name}</p>
						<p>City: {item.address.city}</p>
						<p>Zipcode: {item.address.zipcode}</p>
						<p>Contact: {item.phone}</p>
					</div>

					<button className="red-button" onClick={() => handleDetails(item.id)}>
						{showDetails[item.id] ? "Hide Details" : "View Details"}
					</button>
					{showDetails[item.id] && (
						<div className="details">
							<p>Description: {item.company.catchPhrase}</p>
							<p>Contact Person: {item.name}</p>
							<p>Address: {item.address.street}</p>
							<p>Designation: {item.designation}</p>
							<p>City: {item.address.city}</p>
							<p>Email: {item.email}</p>
							<p>Zipcode: {item.address.zipcode}</p>
							<p>Phone: {item.phone}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default App;
