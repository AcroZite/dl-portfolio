//Imports

//Main
const intro = document.getElementById("intro");
const topbar = document.getElementById("top-bar");
const weatherWidget = document.getElementById("weather-widget");
const weatherConditionIcon = document.getElementById("conditions");

window.onload = fadeIn();
window.onload = translateDown();

//Weather API Call - Temperature
async function getCurrentWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=51.50&lon=-0.11&units=metric&appid=c3c058b2ad45476c232048fdf0fb5380"
  );
  const data = await response.json();
  return data.main.temp;
}

//Weathre API Call - Conditions
async function getCurrentConditions() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=51.50&lon=-0.11&units=metric&appid=c3c058b2ad45476c232048fdf0fb5380"
  );
  const data = await response.json();
  return data.weather[0].main;
}

//add fadein classes to elements
function fadeIn() {
  setTimeout(() => {
    intro.classList.add("fadein");
    topbar.classList.add("fadein");
    weatherWidget.classList.add("fadein");
  }, 300);
}

//add translatedown class to elements
function translateDown() {
  setTimeout(() => {
    intro.classList.add("translatedown");
    weatherWidget.classList.add("translatedown");
  }, 300);
}

//Display weather temperature on page
const currentWeather = Promise.resolve(getCurrentWeather());

currentWeather.then((value) => {
  document.getElementById("temp").innerHTML = Math.round(value);
});

//Display weather conditions on page
const currentConditions = Promise.resolve(getCurrentConditions());

currentConditions.then((value) => {
  weatherConditionIcon.setAttribute("src", `images/${value}.png`);
});
