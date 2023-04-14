const main = document.querySelector('.main');

function createHeading() {
  const headingDiv = document.createElement('div');
  const headingPara = document.createElement('p');
  headingDiv.setAttribute('class', 'heading');
  headingPara.textContent = 'WEATHER APP';
  headingDiv.appendChild(headingPara);
  main.appendChild(headingDiv);
}

function createContent() {
  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  main.appendChild(contentDiv);
}
function createForm() {
  const content = document.querySelector('.content');
  const form = document.createElement('form');
  content.appendChild(form);
}
function createSearchBar() {
  const form = document.querySelector('form');
  const searchIp = document.createElement('input');
  searchIp.type = 'search';
  searchIp.className = 'search';
  searchIp.name = 'search';
  searchIp.required = 'true';
  form.appendChild(searchIp);
}
function createSearchBtn() {
  const form = document.querySelector('form');
  const searchBtn = document.createElement('button');
  searchBtn.type = 'submit';
  searchBtn.className = 'search-btn';
  searchBtn.textContent = 'Search';
  form.appendChild(searchBtn);
}
function createCard() {
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'card');
  const cityPara = document.createElement('p');
  cityPara.className = 'city';
  const tempPara = document.createElement('p');
  tempPara.className = 'temp';
  const feelsPara = document.createElement('p');
  feelsPara.className = 'feels';
  const humidityPara = document.createElement('p');
  humidityPara.className = 'humidity';
  const windPara = document.createElement('p');
  windPara.className = 'wind';
  cardDiv.appendChild(cityPara);
  cardDiv.appendChild(tempPara);
  cardDiv.appendChild(feelsPara);
  cardDiv.appendChild(humidityPara);
  cardDiv.appendChild(windPara);
  const content = document.querySelector('.content');
  content.appendChild(cardDiv);
}
async function getWeatherData(location) {
  const loc = location.toLowerCase() || 'london';
  const forecast = await fetch(
    // eslint-disable-next-line comma-dangle
    `https://api.weatherapi.com/v1/current.json?key=469b2f87163341f88fc112429231404&q=${loc}`
  );
  const weatherData = await forecast.json();
  console.table(weatherData);
  return weatherData;
}
async function displayCard(weather) {
  const weatherData = weather || (await getWeatherData('London'));
  const city = document.querySelector('.city');
  const temp = document.querySelector('.temp');
  const feels = document.querySelector('.feels');
  const humidity = document.querySelector('.humidity');
  const wind = document.querySelector('.wind');
  city.textContent = weatherData.location.name.toUpperCase();
  temp.textContent = weatherData.current.temp_c;
  feels.textContent = weatherData.current.feelslike_c;
  humidity.textContent = weatherData.current.humidity;
  wind.textContent = weatherData.current.wind_kph;
}

async function searchLocation() {
  const form = document.querySelector('form');
  const search = document.querySelector('.search');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = search.value.toLowerCase();
    const weatherData = await getWeatherData(location);
    displayCard(weatherData);
  });
}

createHeading();
createContent();
createForm();
createSearchBar();
createSearchBtn();
createCard();
searchLocation();
displayCard();
