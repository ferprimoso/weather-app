import getCitytime from './getCityTime';

function padTo2Digits(num) {
  return String(num).padStart(2, '0');
}

const updateDom = (data) => {
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');
  const humidity = document.querySelector('#humidity');
  const winds = document.querySelector('#winds');
  const icon = document.querySelector('#icon');
  const tempdescription = document.querySelector('#description');
  const iconUrl = `http://openweathermap.org/img/wn/${data.tempicon}@2x.png`;
  const clock = document.querySelector('#clock');

  city.textContent = data.city;
  temp.textContent = `${data.temp}ºC`;
  humidity.textContent = `${data.humidity}%`;
  winds.textContent = `${data.wind}%`;

  tempdescription.textContent = data.tempdescription;
  icon.src = iconUrl;

  clock.textContent = `${padTo2Digits(
    getCitytime(data.timezone).getHours()
  )}:${padTo2Digits(getCitytime(data.timezone).getMinutes())}`;
};

const updateBrackground = (img) => {
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${img})`;
  console.log(img);
};

export { updateDom, updateBrackground };
