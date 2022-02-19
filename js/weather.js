const API_KYE = "6b0b103d3f4621ea3b524da0f3ca9fb8";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KYE}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(date => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        city.innerText = date.name;
        weather.innerText = `${date.weather[0].main} / ${date.main.temp}`;
    });
}

function onGeoError() {
    alert("위치를 알 수 없습니다. 날씨정보를 불러 오지 못해요 ㅠㅠ")

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);