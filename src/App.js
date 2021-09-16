import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import CityDetails from "./components/CityDetails.js";
import AllCountries from "./components/AllCountries";
import AllStates from "./components/AllStates";
import AllCities from "./components/AllCities";

// https://api.airvisual.com/v2/countries?key=a2f977a0-7c21-4fe1-a175-7de9665ee4b9

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: "url(./images/8450_2.webp)" }}
    >
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/AllCountries">Best and Worst</Link>
          {/* <Link to="/AllStates">All States</Link>
					<Link to="/AllCities">All Cities</Link>
					<Link to="/CityDetails">City Details</Link> */}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={AllCountries} />
        {/* <Route exact path="/CityDetails" component={CityDetails} /> */}
        {/* <Route exact path="/AllCountries" component={AllCountries} /> */}
        <Route exact path="/country/:countryName" component={AllStates} />
        <Route
          exact
          path="/country/:countryName/state/:stateName"
          component={AllCities}
        />
        <Route
          exact
          path="/country/:countryName/state/:stateName/city/:cityName"
          component={CityDetails}
        />
        {/* <Route exact path="/AllCities" component={AllCities} /> */}
      </Switch>
    </div>
  );
}

export default App;
