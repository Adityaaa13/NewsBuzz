const apiKey = "b1b834d10a2fb54869d5ad8d481fc7b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl} ${city} + &appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = (data.wind.speed *1.6).toFixed(3)+ " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Clouds.jpeg";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.jpg";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.jpg" ;
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.jpg";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.keyCode === 13 || event.which === 13) { // '13' is the keycode for Enter key
      checkWeather(searchBox.value);
  }
});