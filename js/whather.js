const API_KEY = "803eb1b57d8449f70cbd85ac597c9590";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const weatherIcon = {
    "01": "fas fa-sun",
    "02": "fas fa-cloud-sun",
    "03": "fas fa-cloud",
    "04": "fas fa-cloud-meatball",
    "09": "fas fa-cloud-sun-rain",
    10: "fas fa-cloud-showers-heavy",
    11: "fas fa-poo-storm",
    13: "far fa-snowflake",
    50: "fas fa-smog",
  };

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector("#weather span:nth-child(1)");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:nth-child(3)");

      icon.innerHTML = `<i class=" + ${
        weatherIcon[data.weather[0].icon.substr(0, 2)]
      } +"></i>`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
