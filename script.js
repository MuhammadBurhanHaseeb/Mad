document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);

function fetchWeather() {
    var cityName = document.getElementById('cityName').value;
    var apiKey = '56fb401e0a7b2e6e61632ccc51c052d4'; // Replace with your actual API key
    // Example URL, replace with actual API URL that accepts city names if available
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
            displayWeather(response);
        } else {
            console.error('Error fetching weather data');
        }
    };
    xhr.onerror = function() {
        console.error('Request error...');
    };
    xhr.send();
}

function displayWeather(data) {
    var display = document.getElementById('weatherResult');
    var weatherHtml = `<h2>Weather in ${data.name}</h2>
                       <p>Temperature: ${data.main.temp}°C</p>
                       <p>Weather: ${data.weather[0].main}</p>
                       <p>Description: ${data.weather[0].description}</p>
                       <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">`;
    display.innerHTML = weatherHtml;
}
