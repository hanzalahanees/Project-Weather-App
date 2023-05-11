function weatherApp() {
  const form = document.querySelector('form');
  const submitBtn = document.querySelector('.search-submit');
  const error = document.querySelector('.error-msg');
  form.addEventListener('submit', handleSubmit);
  submitBtn.addEventListener('click', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather();
  }

  async function getWeatherData(location) {
    const response = await fetch(
      `//api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`,
      {
        mode: 'cors',
      }
    );
    if (response.status === 400) {
      throwErrorMsg();
    } else {
      error.style.display = 'none';
      const weatherData = await response.json();
      const newData = processData(weatherData);
      displayData(newData);
      reset();
    }
  }

  function throwErrorMsg() {
    error.style.display = 'block';
  }

  function processData(weatherData) {
    // grab all the data i want to display on the page
    const myData = {
      condition: weatherData.current.condition.text,
      feelsLike: {
        f: Math.round(weatherData.current.feelslike_f),
        c: Math.round(weatherData.current.feelslike_c),
      },
      currentTemp: {
        f: Math.round(weatherData.current.temp_f),
        c: Math.round(weatherData.current.temp_c),
      },
      wind: Math.round(weatherData.current.wind_mph),
      humidity: weatherData.current.humidity,
      location: weatherData.location.name,
    };

    // if in the US, add state
    // if not, add country
    if (weatherData.location.country === 'United States of America') {
      myData['region'] = weatherData.location.region;
    } else {
      myData['region'] = weatherData.location.country;
    }

    return myData;
  }

  function displayData(newData) {
    document.querySelector('.condition').textContent = newData.condition;
    document.querySelector(
      '.location'
    ).textContent = `${newData.location} , ${newData.region}`;
    document.querySelector('.degrees').textContent = newData.currentTemp.f;
    document.querySelector(
      '.feels-like'
    ).textContent = `Feels Like:  ${newData.feelsLike.f}`;
    document.querySelector('.wind-mph').textContent = `Wind: ${newData.wind} MPH`;
    document.querySelector(
      '.humidity'
    ).textContent = `Humidity: ${newData.humidity}`;
  }

  function reset() {
    form.reset();
  }

  // Get location from User
  function fetchWeather() {
    const input = document.querySelector('input[type="search"]');
    const userLocation = input.value;
    getWeatherData(userLocation);
  }

}

export default weatherApp;
