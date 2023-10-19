import React from "react";
import "./App.css";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <div className="container">
                <h1 className="city-name">Santa clara, CA</h1>
                <form className="search-form">
                    <input
                        type="search"
                        className="Search-bar"
                        placeholder="Enter a city..."
                    />
                    <input
                        type="submit"
                        value="search"
                        className="btn button "
                    />
                </form>
            </div>
        </div>
    );
}
