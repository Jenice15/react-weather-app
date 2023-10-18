import "./App.css";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import WeatherSummary from "./WeatherSummary";

function App() {
    return (
        <div className="App">
            <div className="Wrapper">
                <h1 className="header">Weather App</h1>
                <Search />
                <WeatherSummary />
                <WeatherForecast />
            </div>
            <a href="https://github.com/Jenice15/react-weather-app">
                Open source code by
            </a>
            <span> Jenice Martin</span>
        </div>
    );
}
export default App;
