import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllCountries(props) {
  let [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.airvisual.com/v2/countries?key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
      )
      .then((resApi) => {
        console.log(resApi);
        setCountries(resApi.data.data);
      });
  }, []);

  const ShowCountries = () => {
    return (
      <ul>
        {countries.map(({ country }) => {
          return (
            <Link key={country} to={`/country/${country}`}>
              <li>{country}</li>
            </Link>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <ShowCountries />
    </div>
  );
}

export default AllCountries;
