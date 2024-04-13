// selection 

const city_name = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity_value = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind");
const searchBox = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_button");
const weatherIcon = document.querySelector(".weather-icon");
const weather_d = document.querySelector(".weather");

const cityName = searchBox.value;

const apiKey = "65dd7df42a85f874357ecd58a449edcf";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    let data = await response.json(); // data stored in json format
    // destructuring data from the json file
    console.log(data);
    console.log(city_name.innerHTML);
    city_name.innerHTML = data.name;
    console.log(city_name.innerHTML);
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidity_value.innerHTML = data.main.humidity + "%";
    wind_speed.innerHTML = data.wind.speed + "km/h";

    // updating weather icon
    const weatherMain = data.weather[0].main.toLowerCase();
    switch (weatherMain) {
        case "clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        default:
            weatherIcon.src = "images/clouds.png"; // Set a default image or leave it empty
    }
    
// display the card
weather_d.classList.add("display")

}


searchBtn.addEventListener("click",()=>{
    const cityName = searchBox.value;
    checkWeather(cityName);
})

searchBtn.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault(); // Prevent default behavior
        const cityName = searchBox.value;
        checkWeather(cityName);
    }
});

    
