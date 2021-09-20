import axios from 'axios';
import React, { useState, useEffect } from 'react';
import WeatherChannel from './WeatherChannel';
// import Home from './components/Home.js';
import Header from './Header';
import AllCountries from './AllCountries';
import SavedCities from './SavedCities';

//creating searchBar component(function)
const SearchBar = (props) => {
	//set 2 variables to empty string so they automatically reload
	const [ city, setCity ] = useState('');
	const [ aqi, setAqi ] = useState('');
	const [ img, setImg ] = useState('./images/aqi.gif');
	const [ best, setBest ] = useState('./images/best.png');
	const [ worst, setWorst ] = useState('./images/worst.png');
	const [ homeGif, setHomeGif ] = useState('./images/aqi.gif');
	//created SearchAirFunction (gets data from API, and updates air quality index)
	const searchAir = () => {
		console.log('searching');
		console.log(city);
		//stating the variable before axios refreshes the component part of the page
		setAqi('');
		axios
			.get(`https://api.waqi.info/feed/${city}/?token=7bbad505bdf328ef7a5949e2d4876f994f4fb81f`)
			.then((resApi) => {
				console.log(resApi.data.data.aqi);
				setAqi(resApi.data.data.aqi);
				if (resApi.data.data.aqi >= 300) {
					setImg('./images/aqi6.png');
				} else if (resApi.data.data.aqi >= 200) {
					setImg('./images/aqi5.png');
				} else if (resApi.data.data.aqi >= 150) {
					setImg('./images/aqi4.png');
				} else if (resApi.data.data.aqi >= 100) {
					setImg('./images/aqi3.png');
				} else if (resApi.data.data.aqi >= 50) {
					setImg('./images/aqi2.png');
				} else if (resApi.data.data.aqi >= 0) {
					setImg('./images/aqi1.png');
				} else {
					setImg('./images/aqi0.png');
				}
			});
	};

	//update value of variable city when we start typing in search bar. e short for event, but can be any variable.
	const updateCityText = (e) => {
		setCity(e.target.value);
	};

	//allows for enter key to also be used
	const enter = (e) => {
		console.log(e);
		if (e.key === 'Enter') {
			searchAir();
		}
	};

	useEffect(() => {
		axios.get('https://ironrest.herokuapp.com/o2Air').then((res) => console.log(res.data));
	}, []);

	const saveData = () => {
		axios
			.post('https://ironrest.herokuapp.com/o2Air', { Favorite: `${city}` })
			.then((res) => console.log(res.data));
	};

	return (
		<div>
			<div className="upper-bar">
				<div className="search-bar">
					<div>
						<label className="intro-text">Check your local Air Quality</label>
					</div>
					{
						//when you type in search bar, runs the updateCityText function
					}
					<div>
						<input
							onChange={updateCityText}
							onKeyUp={enter}
							type="text"
							className="search-box"
							placeholder="Type City Name"
						/>
						{
							//run searchAir function on click
						}
						<button onClick={searchAir} className="button">
							Search
						</button>
					</div>
				</div>
				<div className="airtext">
					<label className="air-quality">
						Air Quality in {city}: <span>{aqi}</span>
					</label>
				</div>
				<div className="btn-wrapper">
					<button onClick={saveData} className="btn-grad">
						Save Favorite City
					</button>

					<button
						onClick={() => {
							console.log(props);
							props.history.push('/SavedCities');
						}}
						className="btn-grad"
					>
						View Favorite Cities
					</button>

					<button
						onClick={() => {
							console.log(props);
							props.history.push('/WeatherChannel');
						}}
						className="btn-grad"
					>
						Check City Weather
					</button>
				</div>
				<div className="displayimg">
					<img className="animatedImage" src={img} />
				</div>
			</div>

			{/* <section className="specs">
				<img src={best} />

				<img src={worst} />
			</section> */}
		</div>
	);
};

export default SearchBar;
