import React from "react";
import { render } from "react-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const WeatherChannel = () => {
  const[temperature, setTemperature] = useState("")
  const[ desc, setDesc] = useState ("")
  const[city,setCity] = useState("London")
  const[country,setCountry] = useState("UK")

  const getWeatherData = (city,country) => {
    axios({
      method:"GET",
      url:`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=9b93d6189859ed0d0b84a393351b7fcc`
    })
    .then((res) => {
      console.log(res.data.main.temp);
      // Kelvin to Farenheit
      setTemperature((res.data.main.temp - 273.15) * 1.8 +32);
      
      setDesc(res.data.weather[0].main)
    })
    .catch((error) =>{
      console.log(error);
    })
  };
  return(
    <>
      <div>
        <h1 style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          height: "80px",
          width:"100%",
          backgroundColor:"#226ba3",
          fontSize:"30px",
          color: "#fff",
        }}>Weather APP</h1>
      </div>
      <div style={{marginLeft: "33%"}}>
          <div 
            style={{
              height:"250px",
              width: "450px",
              backgroundColor: "#00d4ff",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              fontSize:"30px",
              color: "#fff",
              
            
            }}
            >
            {new Date().toLocaleString()}
              <br/>
                {city} Weather
              <br/>
              {Math.round(temperature * 100) / 100} ℉ - {desc}
            </div>
              <br/>

              <input
                text= "text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                text= "text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <button
                onClick={() => {
                  getWeatherData(city,country);
                }}
              >
                GET
              </button>


      </div>
    </>
  );

};

export default WeatherChannel;
