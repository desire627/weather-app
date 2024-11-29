import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const cityName = weather?.name || "Unknown City";
  const country = weather?.sys?.country || "Unknown Country";
  const temperature = weather?.main?.temp || "N/A";
  const humidity = weather?.main?.humidity || "N/A";
  const windSpeed = weather?.wind?.speed || "N/A";
  const description = weather?.weather?.[0]?.description || "No description available";

  const iconMapping = {
    sunny: "https://img.icons8.com/color/48/000000/sun--v1.png",
    windy: "https://img.icons8.com/color/48/000000/wind.png",
    cloudy: "https://img.icons8.com/color/48/000000/cloud.png",
    snowy: "https://img.icons8.com/color/48/000000/snow.png",
    rainy: "https://img.icons8.com/color/48/000000/rain.png",
  };

  // Default icon
  let weatherIconUrl = iconMapping.sunny;

  if (description.includes("cloud")) {
    weatherIconUrl = iconMapping.cloudy;
  } else if (description.includes("rain")) {
    weatherIconUrl = iconMapping.rainy;
  } else if (description.includes("snow")) {
    weatherIconUrl = iconMapping.snowy;
  } else if (description.includes("wind")) {
    weatherIconUrl = iconMapping.windy;
  }

  // Enhanced logic for nuanced descriptions
  let updatedDescription = "Sunny";

  if (description.includes("cloud")) {
    if (description.includes("overcast")) {
      updatedDescription = "Heavily Cloudy";
    } else if (description.includes("partly")) {
      updatedDescription = "Partly Cloudy";
    } else if (description.includes("mostly")) {
      updatedDescription = "Mostly Cloudy";
    } else {
      updatedDescription = "Cloudy";
    }
  } else if (description.includes("rain")) {
    if (description.includes("heavy")) {
      updatedDescription = "Heavily Rainy";
    } else if (description.includes("light")) {
      updatedDescription = "Slightly Rainy";
    } else {
      updatedDescription = "Rainy";
    }
  } else if (description.includes("snow")) {
    if (description.includes("heavy")) {
      updatedDescription = "Heavily Snowy";
    } else if (description.includes("light")) {
      updatedDescription = "Slightly Snowy";
    } else {
      updatedDescription = "Snowy";
    }
  } else if (description.includes("wind")) {
    updatedDescription = "Windy";
  }

  return (
    <div className="main-card">
      <div className="weather-card">
        {weather ? (
          <>
            <div className="weather-header">
              <h2>
                {cityName}, {country}
              </h2>
              <img
                src={weatherIconUrl}
                alt={updatedDescription}
                className="weather-icon"
              />
            </div>
            <div className="weather-details">
              <div className="weather-item">
                <img
                  src="https://img.icons8.com/color/48/000000/temperature.png"
                  alt="Temperature Icon"
                  className="weather-icon"
                />
                <p>Temperature: {temperature}°C</p>
              </div>

              <div className="weather-item">
                <img
                  src="https://img.icons8.com/color/48/000000/humidity.png"
                  alt="Humidity Icon"
                  className="weather-icon"
                />
                <p>Humidity: {humidity}%</p>
              </div>

              <div className="weather-item">
                <img
                  src="https://img.icons8.com/color/48/000000/wind.png"
                  alt="Wind Speed Icon"
                  className="weather-icon"
                />
                <p>Wind Speed: {windSpeed} kph</p>
              </div>

              <div className="weather-item">
                <img
                  src={weatherIconUrl}
                  alt="Weather Condition Icon"
                  className="weather-icon"
                />
                <p>Weather: {updatedDescription}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Please search for a city to see the weather details.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
