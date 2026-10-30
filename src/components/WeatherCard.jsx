import './WeatherCard.css';

export default function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <div className="weather-main">
        <img src={iconUrl} alt={weather.weather[0].description} />
        <span className="temp">{Math.round(weather.main.temp)}°C</span>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      
      <div className="weather-details">
        <div className="detail-item">
          <span>Páratartalom</span>
          <strong>{weather.main.humidity}%</strong>
        </div>
        <div className="detail-item">
          <span>Szél</span>
          <strong>{weather.wind.speed} m/s</strong>
        </div>
      </div>
    </div>
  );
}