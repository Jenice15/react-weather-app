import React from "react";
import "./App.css";
import "./Search.css";

export default function Search() {
    return (
        <div className="App">
            <div className="container">
                <form className="search-form">
                    <input
                        type="search"
                        className="Search-bar"
                        placeholder="Enter a city..."
                    />
                    <input
                        type="submit"
                        value="search"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        </div>
    );
}
