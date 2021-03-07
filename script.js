// WeatherChecker Dean Raguso

//Uses prompt-sync node package for simplicity on node
const prompt = require('prompt-sync')();

//Get user input
const city = prompt("Please enter the name of a city: ").toLocaleLowerCase();
const state = prompt("Please enter the name of the state of that city: ").toLocaleLowerCase();

//Construct URL
const prelim = "&appid="
const APIkey = "9f49ec1e09fbf705c91e6c289950c78b";
let user_URL = "api.openweathermap.org/data/2.5/weather?q=";

user_URL += city + "," + state + prelim + APIkey;

console.log(user_URL);