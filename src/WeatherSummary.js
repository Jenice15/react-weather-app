import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import Card from "react-bootstrap/Card";

export default function WeatherSummary(props) {
    return (
        <div className="weather-summary">
            <Card className="summary-card">
                <Card.Body>
                    <div className="c-body">
                        <FormattedDate data={props.data.date} />
                        <br />
                        <ReactAnimatedWeather
                            className="animated-icon"
                            icon="CLEAR_DAY"
                            color="orange"
                            size="60"
                            animate="true"
                        />
                        <div className="temp">
                            {Math.round(props.data.temperature)}
                            <span className="units">&deg;C/&deg;F</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className="summary-data-card">
                <Card.Body>
                    <ul className="summary-data">
                        <li>
                            Real Feel : {Math.round(props.data.feelsLike)}{" "}
                            C&deg;
                        </li>
                        <li>Humidity : {props.data.humidity}%</li>
                        <li>Wind : {Math.round(props.data.wind)} mph</li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}
