import 'normalize.css';
import './styles/main.scss';
import { getWeatherData } from './weatherApi';
import { getLocationImage } from './imageApi';
import updateDom from './updateDom';

getLocationImage('Guarujá');
getWeatherData('Guaruja').then((data) => console.log(data));
// Events

const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = document.querySelector('#searchbox').value;
  getWeatherData(searchValue).then((data) => updateDom(data));
});
