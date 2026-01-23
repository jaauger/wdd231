
const wdurl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.52&lon=-111.93&appid=7ce7d80f6f9b5c888f36fd0c0e5c48e6&units=imperial';

const wfurl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.52&lon=-111.93&appid=7ce7d80f6f9b5c888f36fd0c0e5c48e6&units=imperial';

const currentTemp = document.querySelector('#temp');
const currentHumidity = document.querySelector('#humidity');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetchWeather() {
  try {
    const response = await fetch(wdurl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayWeatherResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);

  }
}

async function apiFetchForecast() {
  try {
    const response = await fetch(wfurl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecastResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  }catch (error) {
    console.log(error);
  }
}

apiFetchWeather();
apiFetchForecast();

const sunriseMT = sunriseUTC.toLocaleTimeString('en-US', { timeZone: 'America/Denver' });

function displayWeatherResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  highTemp.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;F`;
  lowTemp.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;F`;
  currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;

  // Convert sunrise & sunset
  const sunriseUTC = new Date(data.sys.sunrise * 1000);
  const sunsetUTC = new Date(data.sys.sunset * 1000);

  const sunriseMT = sunriseUTC.toLocaleTimeString('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: '2-digit'
  });

  const sunsetMT = sunsetUTC.toLocaleTimeString('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: '2-digit'
  });

  sunrise.innerHTML = `Sunrise: ${sunriseMT}`;
  sunset.innerHTML = `Sunset: ${sunsetMT}`;

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

function displayForecastResults(data) {
  const dayElements = [
    document.querySelector('#day-1'),
    document.querySelector('#day-2'),
    document.querySelector('#day-3'),
    document.querySelector('#day-4'),
    document.querySelector('#day-5')
  ];

  let dayIndex = 0;
  const seenDates = new Set();

  data.list.forEach(entry => {
    if (dayIndex >= 5) return;

    const date = new Date(entry.dt * 1000);
    const dateKey = date.toISOString().split('T')[0];
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

    // Only use first forecast per new day
    if (!seenDates.has(dateKey)) {
      seenDates.add(dateKey);

      dayElements[dayIndex].innerHTML = `${dayName}: <strong>${Math.round(entry.main.temp)}&deg;F</stong>`;

      dayIndex++;
    }
  });
}


