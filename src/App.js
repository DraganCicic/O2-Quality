import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home.js';
import CityDetails from './components/CityDetails.js';
import AllCountries from './components/AllCountries';
import AllStates from './components/AllStates';
import AllCities from './components/AllCities';
import SearchBar from './components/SearchBar';
import WeatherChannel from './components/WeatherChannel';
import { useEffect } from 'react';
import axios from 'axios';

// https://api.airvisual.com/v2/countries?key=a2f977a0-7c21-4fe1-a175-7de9665ee4b9

function App() {
	const location = useLocation()
	
	const isHomePage = location.pathname === "/"
	return (
		<div className="App">
			<nav>
				<ul>
					{
						isHomePage ? null : <Link to="/"><img src=" https://www.pngall.com/wp-content/uploads/2016/04/Home-Download-PNG.png" alt="home" style={{
							width: "50px"
						}
							
						}/></Link>
					}
					
					{/* <Link to="/WeatherChannel">Check City Weather</Link> */}
				</ul>
			</nav>
			<Switch>
				<Route exact path="./Home" component={Home} />
				<Route exact path="/" component={AllCountries} />
				{/* <Route exact path="/CityDetails" component={CityDetails} /> */}
				{/* <Route exact path="/AllCountries" component={AllCountries} /> */}
				<Route exact path="/country/:countryName" component={AllStates} />
				<Route exact path="/country/:countryName/state/:stateName" component={AllCities} />
				<Route exact path="/country/:countryName/state/:stateName/city/:cityName" component={CityDetails} />
				{/* <Route exact path="/AllCities" component={AllCities} /> */}
				<Route exact path="/WeatherChannel" component={WeatherChannel} />
			</Switch>
		</div>
	);
}

export default App;
