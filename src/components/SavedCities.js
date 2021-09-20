import axios from "axios";
import React, { useState, useEffect } from "react";
import AllCities from "./AllCities";
import { Link } from "react-router-dom";

const SavedCities = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    axios.get("https://ironrest.herokuapp.com/o2Air").then((res) => {
      //create array with numbers of repeats
      setFavoriteCities(res.data);
        function setFavoriteCities(favoriteCities, value) {
            let count = 0
            favoriteCities.forEach((v) => (v === value && count++))
            return count;
        }
            console.log(setFavoriteCities(favoriteCities, 1))
    });
  }, []);

  const ShowFavoriteCities = () => {
    return (
      <ul>
        {favoriteCities.map((city) => {
          return (
            <Link key={city._id} to={`/city/${city._id}`}>
              {" "}
              <li className="list-css">
                <a href="#">
                  {city.Favorite} {city.amount}{" "}
                </a>
              </li>{" "}
            </Link>
          );
        })}
      </ul>
    );
  };
  return (
    <div>
      <h1 className="favorites">Your Favorite Cities</h1>
      <div className="list-cities">
        <div className="savedCities-container">
          <ShowFavoriteCities />
        </div>
      </div>
    </div>
  );
};

export default SavedCities;
