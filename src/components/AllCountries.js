import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Home';

function AllCountries(props) {
	let [ countries, setCountries ] = useState([]);

	// useEffect(() => {
	// 	axios.get(`https://api.airvisual.com/v2/countries?key=e5d2e6c7-288c-4da1-9c90-afaafa4f693b`).then((resApi) => {
	// 		console.log(resApi, ' alll');
	// 		setCountries(resApi.data.data);
	// 	});
	// }, []);

	// const ShowCountries = () => {
	// 	return (
	// 		<ul>
	// 			{countries.map(({ country }) => {
	// 				return (
	// 					<li>
	// 						<Link key={country} to={`/country/${country}`}>
	// 							{country}
	// 						</Link>
	// 					</li>
	// 				);
	// 			})}
	// 		</ul>
	// 	);
	// };

	return (
		<div className="container">
			<div className="inner-container">
				{/* <div className="places">
				<ShowCountries />
			</div> */}
				<Home {...props} />
			</div>
		</div>
	);
}

export default AllCountries;
