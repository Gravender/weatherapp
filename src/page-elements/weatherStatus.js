function unitSlider() {
  const sliderDiv = document.createElement("div");
  const slider = document.createElement("label");
  const input = document.createElement("input");

  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "switch");
  slider.setAttribute("for", "switch");

  sliderDiv.classList.add("sliderDiv");
  slider.classList.add("unitSwitch");
  input.classList.add("sliderCheck");

  sliderDiv.appendChild(input);
  sliderDiv.appendChild(slider);
  return sliderDiv;
}

function weatherStatus() {
  const weatherStatusDiv = document.createElement("div");
  const temp = document.createElement("h2");
  const feelslike = document.createElement("h3");
  const humidity = document.createElement("h3");
  const img = document.createElement("img");
  img.src = "#";
  const changeUnit = document.createElement("p");
  const slider = unitSlider();

  weatherStatusDiv.classList.add("weatherStatusDiv");
  temp.classList.add("temp");
  feelslike.classList.add("feelslike");
  humidity.classList.add("humidity");
  changeUnit.classList.add("changeUnitLabel");

  temp.innerText = `Temperature `;
  feelslike.innerText = `Feels Like: `;
  humidity.innerText = `Humidity: ${0} %`;
  changeUnit.innerText = "Change unit";

  temp.setAttribute("id", "weatherStatusTemp");
  feelslike.setAttribute("id", "weatherStatusFeelsLike");
  humidity.setAttribute("id", "weatherStatusHumidity");

  temp.setAttribute("data-temp", 0);
  feelslike.setAttribute("data-temp", 0);
  humidity.setAttribute("data-humidity", 0);

  weatherStatusDiv.appendChild(temp);
  weatherStatusDiv.appendChild(img);
  weatherStatusDiv.appendChild(feelslike);
  weatherStatusDiv.appendChild(humidity);
  weatherStatusDiv.appendChild(changeUnit);
  weatherStatusDiv.appendChild(slider);
  return weatherStatusDiv;
}
export default weatherStatus;
