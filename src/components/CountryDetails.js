import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails(props) {
  const [air, setAir] = useState({});

  let [city, setCity] = useState("Miami");
  let [state, setState] = useState("Florida");
  let [country, setCountry] = useState("USA");

  useEffect(() => {
    axios
      .get(
        `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
      )
      .then((resApi) => {
        // console.log(resApi);
        setAir(resApi.data.data);
      });

    axios
      .get(
        `https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=6f4c381f-9e57-4316-82df-7d1c53d6b9a2`
        //   {
        //     headers: {
        //       api_key: "6f4c381f-9e57-4316-82df-7d1c53d6b9a2",
        //     },
        //   }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="details">
      <div>
        <h2> {}</h2>
      </div>
      CountryDetails
    </div>
  );
}

export default CountryDetails;
