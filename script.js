import { checkStoredCity } from "./components/locations.js";
import { getWeather } from "./components/weatherApi.js"
import { getForecast } from "./components/threeDayForecast";

let cityName = document.getElementById("city-name");
let changeLocation = document.getElementById("change-location");

let debounceTimer;

checkStoredCity();

cityName.addEventListener("input", function () {
    clearTimeout(debounceTimer);

    localStorage.setItem("city", cityName.value);

    changeLocation.classList.remove("hidden");

    debounceTimer = setTimeout(() => {
        if (cityName.value.trim() !== "") {
            getWeather(cityName.value);
            getForecast(cityName.value);
        }
    }, 2000);
});

changeLocation.addEventListener("click", () => {
    localStorage.removeItem("city");
    window.location.reload();
});



