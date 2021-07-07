const API_KEY = "68c8e81be56567cedb8936023d6b88e4"
const feelLikeDis = document.querySelector(".feel-like > span")
const windDis = document.querySelector(".wind > span")
const weatherDis = document.querySelector(".weather > img")
const locationDis = document.querySelector(".location")
const temperatureDis = document.querySelector(".temperature > span")
const weatherSelect = document.querySelector("#weather-select")
const info = document.querySelector(".info")

weatherSelect.addEventListener("change", (e) => {
    getWeather(e.target.value)
})

const getWeather = async (city = 'seoul') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(url)
    // .then(res => {}).catch(err => console(err))
    // promise대신 async / await 사용. 결과를 받아오는 데 시간이 걸리기 때문에 밑에 오는 코드를 잠시 기다리게 해주는 명령

    const { name, main, weather, wind } = response.data;
    locationDis.innerText = name;
    temperatureDis.innerText = transferTemp(main.temp)
    weatherDis.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}.png`);
    windDis.innerText = wind.speed;
    feelLikeDis.innerText = transferTemp(main.feels_like)
    // console.log(response.data.name)
}

const transferTemp = (temp) => {
    return (temp - 273.15).toFixed(1)
}
getWeather()