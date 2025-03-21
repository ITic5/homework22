import axios from "axios";

const apiUrl = "http://api.weatherapi.com/v1/forecast.json";
const apiKey = "ed678099ddee4a1dac894410252003";

let forecastWrapper = document.getElementById("forecast-wrapper");

export async function getForecast(city){
    const response = await axios.get(apiUrl, {
        params: {
            key: apiKey,
            q: city,
            days: 4
        }
    });
    console.log(response.data.forecast.forecastday);

    forecastWrapper.innerHTML = "";

    for(let i=1; i<5; i++){
        let weatherWrapper = document.createElement("div");
        weatherWrapper.classList.add("weather-wrapper");

        let date = document.createElement("p");
        date.innerText = response.data.forecast.forecastday[i].date;

        let weatherImage = document.createElement("img");
        weatherImage.classList.add("weather-image");
        weatherImage.src = response.data.forecast.forecastday[i].day.condition.icon;

        let weatherDescription = document.createElement("p");
        weatherDescription.classList.add("weather-description");
        weatherDescription.innerText = response.data.forecast.forecastday[i].day.condition.text;

        let weatherTempMax = document.createElement("p");
        weatherTempMax.classList.add("weather-temp");
        weatherTempMax.innerText = "Max temp: " + response.data.forecast.forecastday[i].day.maxtemp_c + "°C";

        let weatherTempMin = document.createElement("p");
        weatherTempMin.classList.add("weather-temp");
        weatherTempMin.innerText = "Min temp: " + response.data.forecast.forecastday[i].day.mintemp_c + "°C";

        let weatherAirHumidity = document.createElement("p");
        weatherAirHumidity.classList.add("weather-air-humidity");
        weatherAirHumidity.innerText = "Avg air humidity: " + response.data.forecast.forecastday[i].day.avghumidity;

        weatherWrapper.append(date, weatherImage, weatherDescription, weatherTempMax, weatherTempMin, weatherAirHumidity);
        forecastWrapper.append(weatherWrapper);
    }

}