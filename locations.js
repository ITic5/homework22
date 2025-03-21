import { getWeather } from "./weatherApi.js";

export async function checkStoredCity() {
    let storedCity = localStorage.getItem("city");
    let changeLocation = document.getElementById("change-location");

    if (storedCity) {
        changeLocation.classList.remove("hidden");
        getWeather(storedCity);
    }
}