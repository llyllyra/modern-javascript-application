import Data from "./config.js";
import weatherDisplay from "./weatherDisplay.js";
import axios from "axios";
let dataWeather = [];
const fetchWeather = async (city) => {
  let url =
    "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    city +
    "&units=metric&lang=fr&cnt=7&appid=" +
    Data.key;

  await axios.get(url).then((res) => {
    dataWeather = res.data;
  });

  weatherDisplay(dataWeather);
};

export default fetchWeather;
