import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Home';

function AllCountries(props) {
	let [ countries, setCountries ] = useState([]);

	useEffect(() => {
		axios.get(`https://api.airvisual.com/v2/countries?key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`).then((resApi) => {
			console.log(resApi, ' alll');
			setCountries(resApi.data.data);
		});
	}, []);

	const ShowCountries = () => {
		return (
			<ul>
				{countries.map(({ country }) => {
					return (
						<li>
							<Link key={country} to={`/country/${country}`}>
								{country}
							</Link>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<div>
			<div className="places">
				<ShowCountries />
			</div>
			<Home />
		</div>
	);
}

export default AllCountries;
