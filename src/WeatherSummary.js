import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSummary() {
    return (
        <div className="weather-summary">
            <h1 className="city-name">Santa Clara</h1>
            <div className="date-time">Tuesday 17 10:19AM</div>
            <br />
            <ReactAnimatedWeather
                className="animated-icon"
                icon="CLEAR_DAY"
                color="orange"
                size="60"
                animate="true"
            />
            <div className="temp">
                15
                <span className="units">&deg;C/&deg;F</span>
            </div>
            <ul className="summary-data">
                <li>H:19&deg;</li>
                <li>L:5&deg;</li>
                <li>Real Feel 6&deg;</li>
            </ul>
        </div>
    );
}
