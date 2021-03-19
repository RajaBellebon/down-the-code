const axios = require('axios');

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=${
  process.env.GATSBY_WEATHER_KEY
}`;

const getTemperature = (Lat, Long) => {
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&lat=${Lat}&lon=${Long}`;
  return axios.get(requestUrl).then(
    function(res) {
      console.log(res.data);
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res.data);
        return res.data;
      }
    },
    function(res) {
      throw new Error(res.data.message);
    },
  );
};

const feelingEmoji = temp => {
  let emoji;
  if (temp) {
    switch (true) {
      case temp >= 25:
        emoji = '🤩';
        break;
      case temp < 25 && temp >= 20:
        emoji = '😓';
        break;
      case temp < 20 && temp >= 0:
        emoji = '😰';
        break;
      case temp < 0:
        emoji = '🤧';
        break;
      default:
        emoji = '👋🏾';
    }
  } else {
    emoji = '😫';
  }
  return emoji;
};

const weatherEmoji = param => {
  let emoji;
  if (param) {
    const weatherDescription = param.toLowerCase();
    switch (true) {
      case weatherDescription.includes('rain'):
        emoji = '🌧 ☔️';
        break;
      case weatherDescription.includes('sun') &&
        (weatherDescription.includes('cloud') ||
          weatherDescription.includes('clouds')):
        emoji = '🌤⛅';
        break;
      case weatherDescription.includes('clouds') ||
        (weatherDescription.includes('cloud') &&
          !weatherDescription.includes('sun')):
        emoji = '☁️';
        break;
      case weatherDescription.includes('sun') &&
        !(
          weatherDescription.includes('cloud') ||
          weatherDescription.includes('clouds')
        ):
        emoji = '☀️';
        break;
      case weatherDescription.includes('clear'):
        emoji = '☀️';
        break;
      case weatherDescription.includes('snow'):
        emoji = '❄️';
        break;
      case weatherDescription.includes('fog'):
        emoji = '🌫';
        break;
      case weatherDescription.includes('wind') ||
        weatherDescription.includes('winds'):
        emoji = '🌬';
        break;
      default:
        emoji = '👋🏾';
    }
  } else {
    emoji = '😫';
  }

  return emoji;
};

module.exports = { getTemperature, feelingEmoji, weatherEmoji };
