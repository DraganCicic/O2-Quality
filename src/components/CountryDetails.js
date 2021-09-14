import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
	const [ air, setAir ] = useState({});

	let [ city, setCity ] = useState('Miami');
	let [ state, setState ] = useState('Florida');
	let [ country, setCountry ] = useState('USA');

	useEffect(() => {
		axios
			.get(
				`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
			)
			.then((resApi) => {
				console.log(resApi);
				setAir(resApi.data.data);
			});
	}, []);

	const CountryDetails = () => {
		return <div>Country Details</div>;
	};
}
export default CountryDetails;
