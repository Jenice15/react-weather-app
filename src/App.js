import "./App.css";

import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import WeatherSummary from "./WeatherSummary";
import Card from "react-bootstrap/Card";

function App() {
    return (
        <div className="App">
            <Card className="Card mx-auto">
                <Card.Body>
                    <div className="Wrapper">
                        <div className="container">
                            <Search />
                            <WeatherSummary />
                            <WeatherForecast />
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <a href="https://github.com/Jenice15/react-weather-app">
                Open source code by
            </a>
            <span> Jenice Martin</span>
        </div>
    );
}
export default App;
