import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import "./WeatherSummary.css";
import WeatherSummary from "./WeatherSummary";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.temperature.current,
            feelsLike: response.data.temperature.feels_like,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000),
            city: response.data.name,

            ready: true,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }
    function search() {
        const apiKey = "fa90t5bf5523344e459f280fabbb9o83";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Search">
                <div className="container">
                    <h1 className="city-name">{city}</h1>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            className="Search-bar"
                            placeholder="Enter a city..."
                            onChange={handleCityChange}
                        />
                        <input
                            type="submit"
                            value="search"
                            className="btn button "
                        />
                    </form>
                    <WeatherSummary data={weatherData} />
                </div>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}
