const API_KEY = "878ae3f5cfd887981d444e80b4876410";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const name = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      name.innerText = data.name;
      weather.innerText = `${data.main.temp}℃ / ${data.weather[0].main}`;
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
