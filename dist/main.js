var $gXNCa$axios = require("axios");
var $gXNCa$luxon = require("luxon");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $100592030dab1e52$var$Data = {
    key: "a34115395d0b8b32521b321a623aedd0"
};
var $100592030dab1e52$export$2e2bcd8739ae039 = $100592030dab1e52$var$Data;



const $19eb73efd5deb875$export$1f54574f900ea6f7 = (secs, format = "cccc, dd LLL yyyy")=>(0, $gXNCa$luxon.DateTime).fromSeconds(secs).toFormat(format);
const $19eb73efd5deb875$export$f267a2a2654cef30 = (secs)=>(0, $gXNCa$luxon.DateTime).fromSeconds(secs).weekdayShort;


const $fc189e246430aa2d$var$charts = (labels, data)=>{
    let ctx = document.querySelector(".myChart").getContext("2d");
    const chart = Chart.getChart("myChart");
    if (chart) chart.destroy();
    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Temp\xe9rature",
                    data: data,
                    fill: false,
                    borderColor: "red"
                }, 
            ]
        }
    });
};
var $fc189e246430aa2d$export$2e2bcd8739ae039 = $fc189e246430aa2d$var$charts;


let $347b0bbfad520e12$var$labels = [];
let $347b0bbfad520e12$var$data = [];
const $347b0bbfad520e12$var$weatherDisplay = (dataWeather)=>{
    $347b0bbfad520e12$var$labels = [];
    $347b0bbfad520e12$var$data = [];
    const result = document.getElementById("result");
    const today = document.querySelector(".today");
    let dates = dataWeather.list[0].dt;
    result.innerHTML = `
        <h2>${dataWeather.city.country}</h2>
        <h3>${dataWeather.city.name}</h3>
        `;
    today.innerHTML = `
        <h4>${(0, $19eb73efd5deb875$export$1f54574f900ea6f7)(dataWeather.list[0].dt)}</h4>
        <section class="text">
        <img 
        src="http://openweathermap.org/img/wn/${dataWeather.list[0].weather[0].icon}@2x.png" 
        alt="${dataWeather.list[0].weather[0].description}">
        ${Math.round(dataWeather.list[0].temp.max)}° Celcius
        
        </section>
        <p>${dataWeather.list[0].weather[0].description}</p>
        `;
    $347b0bbfad520e12$var$data.push(dataWeather.list[0].temp.max);
    $347b0bbfad520e12$var$labels.push((0, $19eb73efd5deb875$export$f267a2a2654cef30)(dataWeather.list[0].dt));
    for(let i = 1; i < 6; i++){
        // eslint-disable-next-line no-unused-vars
        dates = dataWeather.list[i].dt;
        $347b0bbfad520e12$var$data.push(dataWeather.list[i].temp.max);
        $347b0bbfad520e12$var$labels.push((0, $19eb73efd5deb875$export$f267a2a2654cef30)(dataWeather.list[0].dt));
        const day = document.getElementById([
            i
        ]);
        const list = dataWeather.list[i];
        day.innerHTML = `
        <h4>${(0, $19eb73efd5deb875$export$1f54574f900ea6f7)(dataWeather.list[i].dt)}</h4>
        <section class="text"><img src="http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png" 
        alt="${list.description}"> ${Math.round(list.temp.max)}° Celcius</section>
        <p>${list.weather[0].description}</p>
      
        `;
    }
    //<h4>${getDate(dates,labels)}<h4>
    (0, $fc189e246430aa2d$export$2e2bcd8739ae039)($347b0bbfad520e12$var$labels, $347b0bbfad520e12$var$data);
};
var $347b0bbfad520e12$export$2e2bcd8739ae039 = $347b0bbfad520e12$var$weatherDisplay;



let $b8a94f02aa6c2cad$var$dataWeather = [];
const $b8a94f02aa6c2cad$var$fetchWeather = async (city)=>{
    let url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&lang=fr&cnt=7&appid=" + (0, $100592030dab1e52$export$2e2bcd8739ae039).key;
    await (0, ($parcel$interopDefault($gXNCa$axios))).get(url).then((res)=>{
        $b8a94f02aa6c2cad$var$dataWeather = res.data;
    });
    (0, $347b0bbfad520e12$export$2e2bcd8739ae039)($b8a94f02aa6c2cad$var$dataWeather);
};
var $b8a94f02aa6c2cad$export$2e2bcd8739ae039 = $b8a94f02aa6c2cad$var$fetchWeather;


const $4fa36e821943b400$var$input = document.getElementById("weatherSearch");
const $4fa36e821943b400$var$form = document.querySelector("form");
let $4fa36e821943b400$var$City;
window.addEventListener("load", ()=>{
    (0, $b8a94f02aa6c2cad$export$2e2bcd8739ae039)("namur");
});
$4fa36e821943b400$var$input.addEventListener("keyup", (e)=>{
    $4fa36e821943b400$var$City = e.currentTarget.value.toLowerCase();
});
$4fa36e821943b400$var$form.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        (0, $b8a94f02aa6c2cad$export$2e2bcd8739ae039)($4fa36e821943b400$var$City);
        e.preventDefault();
        $4fa36e821943b400$var$input.value = "";
    }
});


//# sourceMappingURL=main.js.map
