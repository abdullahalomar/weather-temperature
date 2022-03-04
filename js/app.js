const API_KEY =`db4e5700e1f0b50f4f20575e59cafb8e`;
const searchTempareture = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(Response => Response.json())
    .then(json => dislayTemperature(json))

}
const setinnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const dislayTemperature = temperature => {
    setinnerText('city', temperature.name);
    setinnerText('temperature', temperature.main.temp);
    setinnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}