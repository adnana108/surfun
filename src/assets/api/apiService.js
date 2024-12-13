const apiWeather = "https://api.stormglass.io/v2/weather/point";
const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight';
// ,airTemperature,cloudCover,currentDirection,currentSpeed,precipitation,swellDirection,waterTemperature';
const API_KEY = "1c312604-ad8a-11ef-bb67-0242ac130003-1c31265e-ad8a-11ef-bb67-0242ac130003";

async function getWeather() {
    const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
            'Authorization': API_KEY
        }
    });
    const jsonData = await response.json();
    return jsonData;
}

export default getWeather;