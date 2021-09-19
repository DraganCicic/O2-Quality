import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import sun from "./images/sun.gif"
// import rain from "./rain/gif"
// import clear from "./clear.gif"


function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 1.8 + 32
}
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15
}



const WeatherChannel = () => {
  const [temperature, setTemperature] = useState(null)
  const [desc, setDesc] = useState(null)
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=9b93d6189859ed0d0b84a393351b7fcc`
    })
      .then((res) => {
        console.log(res.data.main.temp);
        // Kelvin to Farenheit
        setTemperature(res.data.main.temp);

        setDesc(res.data.weather[0].main)
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const getImage = () => {
    let status = ""
    switch (desc) {
      case "Clouds":
        status = "sun"
        break;
      case "Clear":
        status = "clear"
        break;
      case "Rain":
        status = "rain"
        break;

      default:
        break;
    }
    return `./images/${status}.gif`
  }

  return (
    <>
      <div>
        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#226ba3",
          fontSize: "30px",
          color: "#fff",
        }}>Weather APP</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#00d4ff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "30px",
            color: "#fff",


          }}
        >
          <div className="weatherData">

            <p className="date">{new Date().toLocaleString()}</p>
            {city ? <p className="city">{city} Weather</p> : "-"}
            {temperature ? <p className="temp">{Math.round(kelvinToFahrenheit(temperature))} ℉</p> : "-"}
            {temperature ? <p className="temp">{Math.round(kelvinToCelsius(temperature))} °C</p> : "-"}
            {<p className="weatherStatus">{desc}</p>}
          </div>
          {desc && <img src={getImage()} alt="pic" style={{
            display: "block",
            maxWidth: "100%",
            width: "45%"

          }} />
          }
        </div>





        <div className="form">


          <input className="form-input" placeholder="City"
            text="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input className="form-input" placeholder="Country"
            text="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button className="form-button"
            onClick={() => {
              getWeatherData(city, country);
            }}
          >
            GET
          </button>

        </div>



      </div>
    </>
  );

};

export default WeatherChannel;
