import updateWeatherStatus from "../helper-functions/updateWeatherStatus";

function getWeatherData() {
  const img = document.querySelector("img");
  let location = document.getElementById("search");
  if (!location.value) {
    location = "sydney";
  } else {
    location = location.value;
  }
  async function getWeather() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fd088960330d5cc0a198013df34f9b31`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      updateWeatherStatus(weatherData);
      const { icon } = weatherData.weather[0];
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    } catch (err) {
      alert("city not found");
    }
  }
  getWeather();
}
export default getWeatherData;
