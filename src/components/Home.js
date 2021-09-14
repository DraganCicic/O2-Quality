import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [air, setAir] = useState({});

  let [city, setCity] = useState("Miami");
  let [state, setState] = useState("Florida");
  let [country, setCountry] = useState("USA");

  useEffect(() => {
    axios
      .get(
        `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
      )
      .then((resApi) => {
        console.log(resApi);
        setAir(resApi.data.data);
      });
  }, []);

  return (
    <div className="App">
      <h2> Home {air?.current?.pollution?.aqius}</h2>
    </div>
  );
}

export default Home;

// var config = {
//   method: "get",
//   url: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key=YOUR_API_KEY",
//   headers: {},
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
