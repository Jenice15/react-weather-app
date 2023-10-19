import React from "react";
import "./App.css";
import "./WeatherSummary.css";
import ReactAnimatedWeather from "react-animated-weather";
import Card from "react-bootstrap/Card";

export default function WeatherSummary() {
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
                            15
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
}
