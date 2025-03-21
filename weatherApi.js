import axios from "axios";

const apiKey = "ed678099ddee4a1dac894410252003";
const apiUrl = "http://api.weatherapi.com/v1/current.json";

export async function getWeather(city){
    const response = await axios.get(apiUrl, {
        params: {
            key: apiKey,
            q: city,
        }
    });

    console.log(response.data.current);

    if (response.data.current.is_day !== 1) {
        document.querySelector("body").style.background = "linear-gradient(to bottom, #0b1a40, #081b29, #020b18)";
    } else {
        document.querySelector("body").style.backgroundImage = "linear-gradient(to bottom, #87CEEB, #4A90E2, #1E90FF)";
    }


}