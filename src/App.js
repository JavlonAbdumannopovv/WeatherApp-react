import React, { useState } from 'react';
import './App.css';
import useFeach from './customHook/fetchWeather';
import loadinglogo from "./Imgs/loading.gif";

function App() {
  const [location, setLocation] = useState("Tashkent");
  const { data, loading } = useFeach(location);
  const now = new Date();
  const [value,setValue] = useState("");

  let sendData = (e) => {
    if (e.code === "Enter") {
      setLocation(e.target.value);
      setValue("");
    }
  }

  function dateBuilder(now) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Semptember",
      "October",
      "November",
      "December"
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }




  return (
    <div className="App">
      <div className="back"></div>
      <div className="container">
        <div className="search_box">
          <input
            type="text"
            placeholder="Search..."
            className="search"
            value={(e)=>setValue(e.target.value)}
            onKeyUp={sendData}
          />
        </div>

        {
          loading ? <img src={loadinglogo} alt="loading" className="loading" /> :
            <div className="weather_info">
              <h2 className="location">{data.name}, {data.sys.country}</h2>
              <p className="date">{dateBuilder(now)}</p>
              <h1 className="temp">{Math.round(data.main.temp)}°c</h1>
              <h2 className="weather_main">{data.weather[0].main}</h2>
              <p className="temp_min-max">{Math.round(data.main.temp_min)}°c / {Math.round(data.main.temp_max)}°c</p>
            </div>
        }
      </div>
    </div>
  )

}

export default App;
