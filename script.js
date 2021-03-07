// WeatherChecker Dean Raguso

//Uses prompt-sync node package for simplicity on node
const prompt = require('prompt-sync')();
const fetch = require('node-fetch');

//Get user input
const city = prompt("Please enter the name of a city: ").toLocaleLowerCase();
const state = prompt("Please enter the name of the state of that city: ").toLocaleLowerCase();

//Construct URL
const prelim = "&appid="
const APIkey = "9f49ec1e09fbf705c91e6c289950c78b";
let user_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
user_URL += city + "," + state + prelim + APIkey;

//Send the HTTP request through to the API
let res_obj = fetch(user_URL, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "[your rapidapi key]"
      }
}).then(function (response) {
        return response.json();
}).then(function (myJson){
    //Print useful information to user
    let celsius = myJson.main.temp - 273;
    celsius = Math.round(celsius);
    let condition = myJson.weather[0].main.toLocaleLowerCase();
    console.log(`${celsius} degrees celsius, with ${condition}.`);
});


