async function getCurrentWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=51.50&lon=-0.11&units=metric&appid=c3c058b2ad45476c232048fdf0fb5380"
  );
  const data = await response.json();
  return data.main.temp;
}

const result = Promise.resolve(getCurrentWeather());
result.then((value) => {
  console.log(value);
});
