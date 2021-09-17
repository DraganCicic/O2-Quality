import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AllCountries from "./AllCountries";
import SearchBar from "./SearchBar";
import Header from "./Header";
// import best from "../images/best.png";
// import worst from "../images/worst.png";

function Home() {
  const [air, setAir] = useState({});

  let [city, setCity] = useState("Miami");
  let [state, setState] = useState("Florida");
  let [country, setCountry] = useState("USA");

  useEffect(() => {
    console.log("home");
    axios
      .get(
        `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=e5d2e6c7-288c-4da1-9c90-afaafa4f693b`
      )
      .then((resApi) => {
        console.log(resApi);
        setAir(resApi.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/o2Air")
      .then((res) => console.log(res.data));
  }, []);

  const saveData = () => {
    axios
      .post("https://ironrest.herokuapp.com/o2Air", { hello: "world" })
      .then((res) => console.log(res.data));
  };

  return (
    <div className="hello">
      <button onClick={saveData} className="btn-grad">
        <h1 className="hello-button">Hello World</h1>
      </button>
      <div className="header">
        <Header x="World Air Quality Index (AQI) Checker" />
      </div>
      <div>
        <SearchBar />
      </div>
      {/* <h2> Home {air?.current?.pollution?.aqius}</h2> */}

      {/* <div className="best">
        <h1> Top 5 Best cities</h1>
        <img src="./images/best.png" />
      </div>
      <div className="worst">
        <h1> Top 5 Worst cities</h1>
        <img src="./images/worst.png" />
      </div> */}
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
