import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import Current from "./Current";
import Forecast from "./Forecast";

import "../styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });
  const [fd, setFcd] = useState({data: {},isEmpty:true});

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
      const url='http://api.weatherapi.com/v1/current.json?key=cbb3dd09eb154a7bac5202523251401&q='+query+'&aqi=yes';

      try {
        const res = await axios.get(url);
        console.log();
        
        setWeather({ data: res.data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.log("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const url='http://api.weatherapi.com/v1/current.json?key=cbb3dd09eb154a7bac5202523251401&q=pune&aqi=yes';

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data, loading: false, error: false });
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

      {weather && weather.data && weather.data.location && (
        // Current Weather component
        <Current weather={weather} toDate={toDate}/>
      )}
      {weather && weather.data && weather.data.location && (
        // Current Weather component
        <Forecast weather={weather} toDate={toDate}/>
      )}
    </div>
  );
}

export default App;