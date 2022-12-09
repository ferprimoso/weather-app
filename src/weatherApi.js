const apiKey = 'bdb82d606c200d333cc2d7e1e73c617f';

async function getWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  console.log(data);

  return {
    city: data.name,
    country: data.sys.country,
    temp: data.main.temp,
    tempmax: data.main.temp_max,
    tempmin: data.main.temp_min,
    tempdescription: data.weather[0].description,
    tempicon: data.weather[0].icon,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    timezone: data.timezone,
  };
}

// eslint-disable-next-line import/prefer-default-export
export { getWeatherData };
