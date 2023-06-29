async function quoteOfTheDay() {
  const response = await fetch("https://zenquotes.io/api/quotes/");
  const data = await response.json();
  return data[0].q;
}

const result = Promise.resolve(quoteOfTheDay());
result.then((value) => {
  console.log(value);
});
