document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '1032602b078231cf2e40d19733526cc8';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('weatherCondition').textContent = `Condition: ${data.weather[0].description}`;
            document.getElementById('windspeed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error(error);
        });
});
