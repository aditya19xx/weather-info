const API_KEY = `4144f03046815c8fd9f135fb73e06b15`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text ;
}

const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText('tempValue', temp.main.temp);
    setInnerText('weather-condition', temp.weather[0].main);
    //set weather icon

    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
}