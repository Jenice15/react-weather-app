import "./App.css";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import WeatherSummary from "./WeatherSummary";

function App() {
    return (
        <div className="App">
            <div className="Wrapper">
                <div className="container">
                    <Search />
                    <WeatherSummary />
                    <WeatherForecast />
                </div>
            </div>
            <a href="https://github.com/Jenice15/react-weather-app">
                Open source code by
            </a>
            <span> Jenice Martin</span>
        </div>
    );
}
export default App;
