const updateDom = (data) => {
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');
  const icon = document.querySelector('#icon');
  const tempdescription = document.querySelector('#description');
  const iconUrl = `http://openweathermap.org/img/wn/${data.tempicon}@2x.png`;

  city.textContent = data.city;
  temp.textContent = `${data.temp}º`;
  tempdescription.textContent = data.tempdescription;
  icon.src = iconUrl;
};

export default updateDom;
