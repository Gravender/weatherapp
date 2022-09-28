import loadFooter from "./footer";
import loadHeader from "./header";
import loadWeatherSearch from "./content";
import weatherStatus from "./weatherStatus";

function renderStaticPages() {
  const content = document.createElement("content");
  content.setAttribute("id", `content`);
  content.appendChild(loadWeatherSearch());
  content.appendChild(weatherStatus());
  document.body.appendChild(loadHeader());
  document.body.appendChild(content);
  document.body.appendChild(loadFooter());
}
export default renderStaticPages;
