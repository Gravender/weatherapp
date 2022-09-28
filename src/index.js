import "./css/style.css";
import bindButton from "./helper-functions/bindButton";
import changeUnit from "./helper-functions/changeUnit";
import getWeatherData from "./object-handlers/getWeatherData";
import mainPage from "./page-elements/mainPage";

mainPage();
bindButton();
getWeatherData();
changeUnit();
