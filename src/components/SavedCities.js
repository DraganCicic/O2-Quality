import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AllCities from './AllCities';
import { Link } from 'react-router-dom';

const SavedCities = () => {
	const [ favoriteCities, setFavoriteCities ] = useState([]);

	const [ favCities, setFavCities ] = useState({});

	useEffect(() => {
		axios.get('https://ironrest.herokuapp.com/o2Air').then((res) => {
			//create array with numbers of repeats
			//setFavoriteCities(res.data);

			let obj = {};
			for (let city of res.data) {
				if (obj[city.Favorite]) {
					obj[city.Favorite].amount++;
				} else {
					obj[city.Favorite] = city;
					obj[city.Favorite].amount = 1;
				}
			}

			setFavoriteCities(Object.values(obj));

			// function setFavoriteCities(favoriteCities, value) {
			//     let count = 0
			//     favoriteCities.forEach((v) => (v === value && count++))
			//     return count;
			// }
			//     console.log(setFavoriteCities(favoriteCities, 1))
		});
	}, []);

	const ShowFavoriteCities = () => {
		return (
			<ul>
				{favoriteCities.map((city) => {
					return (
						<Link key={city._id} to={`/SavedCities`}>
							{' '}
							<li className="list-css">
								<a href="#">
									{city.Favorite} ({city.amount})
								</a>
							</li>{' '}
						</Link>
					);
				})}
			</ul>
		);
	};
	return (
		<div>
			<h1 className="favorites">Favorite Cities</h1>
			<div className="list-cities">
				<div className="savedCities-container">
					<ShowFavoriteCities />
				</div>
			</div>
		</div>
	);
};

export default SavedCities;

// axios.delete('https://ironrest.herokuapp.com/deleteCollection/o2Air');
