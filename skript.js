function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayNow = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayNow];
    let monthNow = date.getMonth();
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
      "December"
    ];
    let month = months[monthNow];
    let year = date.getFullYear();
    let currDate = date.getDate();
    let currentDay = `${day} ${currDate} ${month} ${year} ${hours} : ${minutes} `;
    return currentDay;
  }
  let currentDate = document.querySelector("#date");
  currentDate.innerHTML = formatDate(new Date());
  
  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  }
  
  //challenge 3
  
  function showTemperature(response) {
    let todayTemperature = document.querySelector("#temperature");
    let todayCity = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    todayTemperature.innerHTML = Math.round(response.data.main.temp);
    todayCity.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    todayTemperature.innerHTML = Math.round(response.data.main.temp);
  }
  
  function showCity(city) {
    let apiKey = "71ebeeaed9cc1b5740f1ef2da025fc0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  function handleCity(e) {
    e.preventDefault();
    let city = document.querySelector("#city-input");
    showCity(city.value);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleCity);
  