import convertKelvin from "./kelvinConverter";

function updateWeatherStatus(weatherData) {
  const checkbox = document.getElementById("switch");
  const humidity = document.getElementById("weatherStatusHumidity");
  const temp = document.getElementById("weatherStatusTemp");
  const feelslike = document.getElementById("weatherStatusFeelsLike");
  temp.dataset.temp = weatherData.main.temp;
  feelslike.dataset.temp = weatherData.main.feels_like;
  humidity.dataset.humidity = weatherData.main.humidity;

  let unit = "C";
  if (checkbox.checked) {
    unit = "C";
  } else {
    unit = "F";
  }
  temp.innerText = `Temperature ${convertKelvin(
    Number(temp.dataset.temp),
    unit
  )} ${unit}°`;
  feelslike.innerText = `Feels Like: ${convertKelvin(
    Number(feelslike.dataset.temp),
    unit
  )} ${unit}°`;
  humidity.innerText = `Humidity: ${weatherData.main.humidity} %`;
}
export default updateWeatherStatus;
