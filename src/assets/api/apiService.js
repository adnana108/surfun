const API_URL_WEATHER = "https://api.stormglass.io/v2/weather/point";
const API_WEATHER_KEY = "1c312604-ad8a-11ef-bb67-0242ac130003-1c31265e-ad8a-11ef-bb67-0242ac130003";
const API_URL_LOCATION = "http://api.openweathermap.org/geo/1.0/direct";
const API_LOCATION_KEY = "f2993d5c0a59b16c71a11d26c09e9791";
const params = 'waveHeight,airTemperature';
// ,airTemperature,cloudCover,currentDirection,currentSpeed,precipitation,swellDirection,waterTemperature';

const getWeather = async (locationName) => {
    try {
        const location = await fetchLocationData(locationName);

        if (location.length === 0) {
            console.error("No location found");
            return null;
        }

        const lat = (location[0].lat).toFixed(4);
        const lng = (location[0].lon).toFixed(4);
        const weatherData = await fetchWeatherData(lat, lng);

        return weatherData;

    } catch {
        console.error("Ereor in get weather");
        return null;
    }
}

const fetchLocationData = async (cityName) => {
    try {
        console.log(cityName);
        const response = await fetch(`${API_URL_LOCATION}?q=${cityName}&appid=${API_LOCATION_KEY}`);
        return response.json();
    } catch {
        console.error("Failed to fetch location");
        return null;
    }
}

const fetchWeatherData = async (lat, lng) => {
    try {
        const response = await fetch(`${API_URL_WEATHER}?lat=${lat}&lng=${lng}&params=${params}`, {
            headers: {
                'Authorization': API_WEATHER_KEY
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        return await response.json();
    } catch {
        console.error("Failed to fetch weather");
        return null;
    }
}

export default getWeather;