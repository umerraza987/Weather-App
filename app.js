const cityInput = document.querySelector('.city-name');
const btnSearch = document.querySelector('.search-btn');
const weatherCard = document.querySelector('.card');

const weatherImg = document.querySelector('.weather-img')
const tempValue = document.querySelector('.temp-value');
const cityName = document.querySelector('#city-name');
const humidityValue = document.querySelector('.humidity-value');
const windValue = document.querySelector('.wind-value');
const error = document.querySelector('.error')
async function checkWeather(city) {
    const apiKey = "228fd090ffdf9ca5c0d97dab377e00d1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await res.json();
    if (data.cod == 404) {
        error.style.display = 'block';
        weatherCard.style.display = 'none';

    } else {
        tempValue.textContent = Math.round(data.main.temp) + '℃';
        cityName.innerHTML = data.name;
        humidityValue.textContent = data.main.humidity + '%';
        windValue.textContent = data.wind.speed + 'Km/H';
        weatherCard.style.display = 'block';
        error.style.display = 'none';
        if (data.weather[0].main == 'Haze') {
            weatherImg.src = "./img/haze.png"
        } else if (data.weather[0].main == 'Clear') {
            weatherImg.src = "./img/clear-sky.png"
        } else if (data.weather[0].main == 'Clouds') {
            weatherImg.src = "./img/cloudy.png"
        } else if (data.weather[0].main == 'Drizzle') {
            weatherImg.src = "./img/drizzle.png"
        } else if (data.weather[0].main == 'Fog') {
            weatherImg.src = "./img/fog.png"
        } else if (data.weather[0].main == 'Rain') {
            weatherImg.src = "./img/rainy-day.png"
        } else if (data.weather[0].main == 'Snow') {
            weatherImg.src = "./img/snow.png"
        }

    }



};

btnSearch.addEventListener("click", function weather() {
    checkWeather(cityInput.value);
});
cityInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkWeather(cityInput.value);
    }
})
cityInput.addEventListener("input", function (event) {
    
        checkWeather(cityInput.value);
    
})