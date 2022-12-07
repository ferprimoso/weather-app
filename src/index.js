import 'normalize.css';
import './styles/main.scss';
import { getWeatherData } from './weatherApi';
import { updateDom, updateBrackground } from './updateDom';
import { getLocationImage } from './imageApi';

// Initial

getWeatherData('Santos').then((data) => updateDom(data));
getLocationImage('Santos').then((img) => updateBrackground(img));

// Events

const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = document.querySelector('#searchbox').value;
  getWeatherData(searchValue).then((data) => updateDom(data));
  getLocationImage(searchValue).then((img) => updateBrackground(img));
});
