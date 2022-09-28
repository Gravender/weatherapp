function loadWeatherSearch() {
  const weatherSearch = document.createElement("div");
  const button = document.createElement("button");
  const input = document.createElement("input");

  button.innerText = "Get Weather";

  weatherSearch.classList.add("weatherSearch");

  input.setAttribute("id", "search");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter city");
  weatherSearch.appendChild(input);
  weatherSearch.appendChild(button);
  return weatherSearch;
}
export default loadWeatherSearch;
