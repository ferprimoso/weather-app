const updateDom = (data) => {
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');
  const humidity = document.querySelector('#humidity');
  const winds = document.querySelector('#winds');

  const icon = document.querySelector('#icon');
  const tempdescription = document.querySelector('#description');
  const iconUrl = `http://openweathermap.org/img/wn/${data.tempicon}@2x.png`;

  city.textContent = data.city;
  temp.textContent = `${data.temp}ºC`;
  humidity.textContent = `${data.humidity}%`;
  winds.textContent = `${data.wind}%`;

  tempdescription.textContent = data.tempdescription;
  icon.src = iconUrl;
};

const updateBrackground = (img) => {
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${img})`;
  console.log(img);
};

export { updateDom, updateBrackground };
