// function
const api = {
  key: "478cc3c9e7cd7db831d6f004db3d70f7",
  baseurl: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
     getResults(searchbox.value);
    console.log(searchbox.value);
  }
}


function getResults (query) {
   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
   .then(weather => {
     return weather.json();
   }).then(displayResults);


}
