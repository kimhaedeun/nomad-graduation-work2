
const API_KEY="84d7290c49a9094bd357c6aab9803805";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log("you live in",lat,lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText= `${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);