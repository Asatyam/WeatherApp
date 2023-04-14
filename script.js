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
  const content = document.querySelector('.content');
  content.appendChild(cardDiv);
}
async function getWeatherData(location) {
  const forecast = await fetch(
    // eslint-disable-next-line comma-dangle
    `https://api.weatherapi.com/v1/current.json?key=469b2f87163341f88fc112429231404&q=${location}`
  );
  const weatherData = await forecast.json();
  console.table(weatherData);
}
async function searchLocation() {
  const form = document.querySelector('form');
  const search = document.querySelector('.search');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value.toLowerCase();
    getWeatherData(location);
  });
}

createHeading();
createContent();
createForm();
createSearchBar();
createSearchBtn();
createCard();
getWeatherData();
searchLocation();
