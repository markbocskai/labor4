const functions = require("firebase-functions");
const axios = require("axios");

exports.getWeather = functions.https
    .onRequest(async (req, res) => {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "GET");

      const city = req.query.city;
      if (!city) {
        return res.status(400).send("Hiányzik a 'city'!");
      }

      const apiKey = "ca181f78d6cc30de0455a0e5e5782a97";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        res.json(response.data);
      } catch (error) {
        res.status(500).send("Hiba: " + error.message);
      }
    });