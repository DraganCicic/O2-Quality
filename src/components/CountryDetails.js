import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails(props) {
  const [CountryDetails, setCountryDetails] = useState({});

  let [city, setCity] = useState();
  let [state, setState] = useState();
  let [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get(
        `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
      )
      .then((resApi) => {
        console.log(resApi);
        setCountryDetails(resApi.data.data);
      });
  }, []);

  const ShowCountryDetails = () => {
    return (
      <div className="CountryDetails">
        <div>
          <h2>{}</h2>

          <h2>hello</h2>
          <h2>hello</h2>
        </div>
      </div>
    );
  };
}
export default CountryDetails;
