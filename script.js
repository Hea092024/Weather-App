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
     "last-updated"
   ).textContent = `Last updated: ${new Date(
     data.current.last_updated
   ).toLocaleString("en-GB", {
     day: "numeric",
     month: "long",
     year: "numeric",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
     hour12: false,
   })}`;

  document.getElementById(
    "location"
  ).textContent = `${data.location.name}, ${data.location.country}`;

    document.getElementById("current-temp").textContent = `${Math.round(
      data.current.temp_c
    )} ºC | ${Math.round(data.current.temp_f)} ºF`;

   document.getElementById(
     "feels-like"
   ).textContent = `Feels like: ${Math.round(
     data.current.feelslike_c
   )} ºC | ${Math.round(data.current.feelslike_f)} ºF`;
   
document.getElementById(
    "wind-speed"
  ).textContent = `Wind speed: ${Math.round(data.current.wind_kph)} km/h | ${Math.round(
    data.current.wind_mph
  )} mph`;
  
  document.getElementById("local-time").textContent =`local-time ${data.location.localtime}`;

 document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.current.humidity} %`;

   
  const weatherIcon = document.getElementById("weather-icon");
  const iconUrl = data.current.condition.icon;
  weatherIcon.src = `https:${iconUrl}`;
  weatherIcon.style.display = "block";
}



document.getElementById("weather-icon").style.display = "none";

document.getElementById("city").addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    const city = document.getElementById("city").value;
    if (city) {
      getWeatherData(city);
    } else {
      document.getElementById("location").textContent = "Please enter a city.";
      document.getElementById("weather-icon").style.display = "none";
    }
  }
});

document.getElementById("search-btn").addEventListener("click" , function () {
  const city = document.getElementById("city").value;
  if (city) {
    getWeatherData(city);
  } else {
    document.getElementById("location").textContent = "Please enter a city.";
    document.getElementById("weather-icon").style.display = "none";
  }
});
