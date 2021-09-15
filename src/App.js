import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import CountryDetails from "./components/CountryDetails.js";
import AllCountries from "./components/AllCountries";
import AllStates from "./components/AllStates";

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
          <Link to="/AllCountries">All Countries</Link>
          <Link to="/AllStates">All States</Link>
          <Link to="/CountryDetails">City Details</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CountryDetails" component={CountryDetails} />
        <Route exact path="/AllCountries" component={AllCountries} />
        <Route exact path="/country/:countryName" component={AllStates} />
      </Switch>
    </div>
  );
}

export default App;
