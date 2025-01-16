import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";

import "../styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });

  const toDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async (event) => {
    event.preventDefault();
    if (event.type === "click" || (event.type === "keypress" && event.key === "Enter")) {
      setWeather({ ...weather, loading: true });
      const apiKey = "cbb3dd09eb154a7bac5202523251401";
      // const url = `http://api.weatherapi.com/v1/search.json?key=<apiKey>&q=${query}`;
      const url='http://api.weatherapi.com/v1/current.json?key=cbb3dd09eb154a7bac5202523251401&q='+query+'&aqi=yes';

      try {
        const res1 = await axios.get(url);
        const data=JSON.stringify(res1.data);
        console.log(res);
        setWeather({ data: res.data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.log("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey ="cbb3dd09eb154a7bac5202523251401";
      const url='http://api.weatherapi.com/v1/current.json?key=cbb3dd09eb154a7bac5202523251401&q='+query+'&aqi=yes';

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data[1], loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.log("Error fetching initial weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* SearchEngine component */}
      <SearchEngine query={query} setQuery={setQuery} search={search} />

      {weather.loading && (
        <>
          <br />
          <br />
          <h4>Searching...</h4>
        </>
      )}

      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <span style={{ fontFamily: "font" }}>
              Sorry, city not found. Please try again.
            </span>
          </span>
        </>
      )}

      {weather && weather.data && weather.data.condition && (
        // Forecast component
        <Forecast weather={weather} toDate={toDate} />
      )}
    </div>
  );
}

export default App;