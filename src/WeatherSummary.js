import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./WeatherSummary.css";
import ReactAnimatedWeather from "react-animated-weather";
import Card from "react-bootstrap/Card";

export default function WeatherSummary(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        // console.log(response.data);
        setWeatherData({
            temperature: response.data.temperature,
        });
    }

    if (weatherData.ready) {
        return (
            <div className="weather-summary">
                <Card className="summary-card">
                    <Card.Body>
                        <div className="c-body">
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
                                {weatherData.temperature}
                                <span className="units">&deg;C/&deg;F</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="summary-data-card">
                    <Card.Body>
                        <ul className="summary-data">
                            <li>H:19&deg;</li>
                            <li>L:5&deg;</li>
                            <li>Real Feel 6&deg;</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        );
    } else {
        const apiKey = "fa90t5bf5523344e459f280fabbb9o83";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
}
