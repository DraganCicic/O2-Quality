import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CityDetails(props) {

	const [ air, setAir ] = useState({});

	let [ city, setCity ] = useState('Miami');
	let [ state, setState ] = useState('Florida');
	let [ country, setCountry ] = useState('USA');

	useEffect(() => {
		axios.get(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=e5d2e6c7-288c-4da1-9c90-afaafa4f693b`)
			.then((resApi) => {
				console.log(resApi);
				setAir(resApi.data.data);
			}).catch(errorMessage => {
				console.log(errorMessage)
			})

		// axios
		// 	.get(
		// 		`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
		// 		//   {
		// 		//     headers: {
		// 		//       api_key: "6f4c381f-9e57-4316-82df-7d1c53d6b9a2",
		// 		//     },
		// 		//   }
		// 	)
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
		console.log("hello")
	}, []);

	return (
		<div className="details">
			<div>
				<h2>{city}</h2>
			</div>
			City Details
		</div>
	);
}

export default CityDetails;
