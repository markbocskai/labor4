import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5001/pharmapulse-21722/us-central1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getWeather(city) {
    return apiClient.get(`/getWeather?city=${encodeURIComponent(city)}`);
  },
};