import convertKelvin from "./kelvinConverter";

function changeUnit() {
  const checkbox = document.getElementById("switch");
  const temp = document.getElementById("weatherStatusTemp");
  const feelslike = document.getElementById("weatherStatusFeelsLike");
  checkbox.addEventListener("change", () => {
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
  });
}
export default changeUnit;
