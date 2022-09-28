function loadHeader() {
  const header = document.createElement("header");
  const title = document.createElement("h1");

  title.textContent = "Weather App";
  title.classList.add("headerTitle");

  header.appendChild(title);
  return header;
}
export default loadHeader;
