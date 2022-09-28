(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

function loadIMg() {
  const img = document.querySelector("img");
  const search = document.getElementById("search");
  console.log(search.value);
  async function getCats() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=dVgKxXhwrFJq51zJBPLEtCGoizvUDHXc&s=${search.value}`,
      { mode: "cors" }
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
    console.log(catData.data.images.original.url);
  }
  getCats();
}
function creatElement() {
  const img = document.createElement("img");
  const button = document.createElement("button");
  const input = document.createElement("input");

  button.innerText = "new image";
  img.src = "#";

  input.setAttribute("id", "search");
  input.setAttribute("type", "text");
  input.setAttribute("value", "cat");
  document.body.appendChild(img);
  document.body.appendChild(input);
  document.body.appendChild(button);
}
creatElement();
const button = document.querySelector("button");
button.onclick = loadIMg;
loadIMg();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsYUFBYTtBQUN6RyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRJTWcoKSB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuICBjb25zb2xlLmxvZyhzZWFyY2gudmFsdWUpO1xuICBhc3luYyBmdW5jdGlvbiBnZXRDYXRzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9ZFZnS3hYaHdyRkpxNTF6SkJQTEV0Q0dvaXp2VURIWGMmcz0ke3NlYXJjaC52YWx1ZX1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjYXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGltZy5zcmMgPSBjYXREYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICBjb25zb2xlLmxvZyhjYXREYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybCk7XG4gIH1cbiAgZ2V0Q2F0cygpO1xufVxuZnVuY3Rpb24gY3JlYXRFbGVtZW50KCkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBidXR0b24uaW5uZXJUZXh0ID0gXCJuZXcgaW1hZ2VcIjtcbiAgaW1nLnNyYyA9IFwiI1wiO1xuXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VhcmNoXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJjYXRcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cbmNyZWF0RWxlbWVudCgpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbmJ1dHRvbi5vbmNsaWNrID0gbG9hZElNZztcbmxvYWRJTWcoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==