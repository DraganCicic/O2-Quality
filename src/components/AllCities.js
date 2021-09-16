import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AllCountries from "./AllCountries";
import AllStates from "./AllStates";
import Home from "./Home";

function AllCities(props) {
  console.log(props);

  let [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.airvisual.com/v2/cities?state=${props.match.params.stateName}&country=${props.match.params.countryName}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
      )
      .then((resApi) => {
        console.log(resApi, "asdfadsfsdafdasd?");
        setCities(resApi.data.data);
      });
  }, [props]);

  //   {

  const ShowCities = () => {
    return (
      <ul>
        {cities.map(({ city }) => {
          return (
            <Link
              key={city}
              to={`/country/${props.match.params.countryName}/state/${props.match.params.stateName}/city/${city}`}
            >
              <li>{city}</li>
            </Link>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <div className="places">
        <ShowCities />
      </div>
      <Home />
    </div>
  );
}

export default AllCities;
