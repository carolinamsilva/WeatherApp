let now = new Date();
let today = document.querySelector("todays");

let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
todays.innerHTML = `${day}, ${date} of ${month}, ${year} | ${hours}:${minutes}`;

// Week 4 adapted to 5 | Chalenge 1
function searchPosition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#main-temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}ºC`;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-content").value;
  let Key = "ca3362379231357ce52d32281f0f0d60";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
  axios.get(url).then(searchPosition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function showTemperature(response) {
  let h3 = document.querySelector("h3");
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h3.innerHTML = `${response.data.name}`;
  h1.innerHTML = `${temperature}ºC`;
}

// Week 5 | Chalenge 2!
function myPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "ca3362379231357ce52d32281f0f0d60";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(myPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
