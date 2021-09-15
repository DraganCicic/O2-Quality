import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AllCountries from "./AllCountries";
import AllStates from "./AllStates";

function AllCities(props) {
  console.log(props);

  let [city, setCity] = useState({ AllCities });
  let [state, setState] = useState({ AllStates });
  let [country, setCountry] = useState({ AllCountries });

  useEffect(() => {
    axios
      .get(
        `https://api.airvisual.com/v2/cities?state=${AllStates}}&country=${AllCountries}}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
      )
      .then((resApi) => {
        console.log(resApi);
        // setStates(resApi.data.data);
      });
  }, []);

  // const ShowStates = () => {
  //     return (
  //         <ul>
  //         {countries.map(({country}) => {
  //             return <Link key={state} to={`/states/${state}`}><li>{state}</li></Link>
  //         })}
  //         </ul>
  //     )
  // }

  return (
    <div>
      Cities{props.match.params.cityName}
      {/* <Showstates /> */}
    </div>
  );
}

export default AllCities;
