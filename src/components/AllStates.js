import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from './Home';

function AllStates(props) {
	console.log(props);

	let [ states, setStates ] = useState([]);

	useEffect(
		() => {
			axios
				.get(
					`http://api.airvisual.com/v2/states?country=${props.match.params
						.countryName}&key=e5d2e6c7-288c-4da1-9c90-afaafa4f693b`
				)
				.then((resApi) => {
					console.log(resApi, '?!?!?');
					setStates(resApi.data.data);
				});
		},
		[ props ]
	);

	const ShowStates = () => {
		return (
			<ul>
				{states.map(({ state }) => {
					return (
						<Link key={state} to={`/country/${props.match.params.countryName}/state/${state}`}>
							<li>{state}</li>
						</Link>
					);
				})}
			</ul>
		);
	};

	return (
		<div>
			States{props.match.params.countryName}
			{/* <Showstates /> */}
			<div className="places">
				<ShowStates />
			</div>
			<Home />
		</div>
	);
}

export default AllStates;
