const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <p>Please search for a city to see the weather details.</p>;
  }

  const cityName = weather.name || "Unknown City";
  const country = weather.sys?.country || "Unknown Country";
  const temperature = weather.main?.temp || "N/A";
  const description = weather.weather?.[0]?.description || "No description available";
  const humidity = weather.main?.humidity || "N/A";
  const windSpeed = weather.wind?.speed || "N/A";

  return (
    <div className="weather-card">
      <h2>{cityName}, {country}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
    </div>
  );
};

export default WeatherCard;
