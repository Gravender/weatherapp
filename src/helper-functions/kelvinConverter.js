function convertKelvin(kelvin, unit) {
  if (unit === "C") {
    return (kelvin - 273.15).toFixed(2);
  }
  return ((9 / 5) * (kelvin - 273) + 32).toFixed(2);
}
export default convertKelvin;
