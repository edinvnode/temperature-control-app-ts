import React, { useState } from "react";
import "./styles.css";

function App() {
  const [temperatureValue, setTemperatureValue] = useState<number>(10);
  const [temperatureColor, setTemperatureColor] = useState<string>("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;

    if (newTemperature == 31) {
      return;
    }

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);
  };

  const decreasTeemperature = () => {
    const newTemperature = temperatureValue - 1;

    if (newTemperature == -1) {
      return;
    }

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreasTeemperature()}>-</button>
      </div>
    </div>
  );
}

export default App;
