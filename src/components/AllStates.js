import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllStates(props) {
  console.log(props);

  let [states, setStates] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.airvisual.com/v2/states?country=${props.match.params.countryName}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
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
      States{props.match.params.countryName}
      {/* <Showstates /> */}
    </div>
  );
}

export default AllStates;
