import getWeatherData from "../object-handlers/getWeatherData";

function bindButton() {
  const button = document.querySelector("button");
  button.onclick = getWeatherData;
}
export default bindButton;
