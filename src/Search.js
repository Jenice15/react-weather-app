import React from "react";
import "./App.css";
import WeatherSummary from "./WeatherSummary";

export default function Search() {
    return (
        <div className="App">
            <form>
                <input
                    type="search"
                    className="Search-bar"
                    placeholder="Enter a city..."
                />
                <span>
                    <button className="Search-button">Search</button>
                    <button className="Current-button">Current</button>
                </span>
            </form>
        </div>
    );
}
