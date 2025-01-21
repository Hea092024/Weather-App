// async function getWeatherData(city) {
//   const apiKey = "65b97b72fa58428d975121941252001";
//   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

//   const result = await fetch(url);
//   const data = await result.json();
//   console.log(`City: ${data.location.name}`);
//   console.log(`Country: ${data.location.country}`);
// }

// getWeatherData("Paris");


async function getWeatherData(city) {
  const apiKey = "65b97b72fa58428d975121941252001";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const result = await fetch(url);
  const data = await result.json();

  document.getElementById(
    "location"
  ).textContent = `${data.location.name}, ${data.location.country}`;

  const iconUrl = data.current.condition.icon;
  document.getElementById("weather-icon").src = `https:${iconUrl}`;
}

document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  if (city) {
    getWeatherData(city);
  } else {
    document.getElementById("location").textContent = "Please enter a city.";
  }
});
