import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import api from './services/api';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await api.getWeather(city);
      setWeather(response.data);
    } catch (err) {
      setError('Nem sikerült lekérni az időjárást. Ellenőrizd a város nevét!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="weather-box">
        <h1>Időjárás Előrejelzés</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Add meg a város nevét..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Keresés...' : 'Keresés'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;