// Dakota's Section


//begin weather app
let weather = {
    apiKey: "ce799edeec116539e35783770070d97d",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { icon, description } = data.weather[0];
        const { speed } = data.wind;
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#description").innerText = description;
        document.querySelector("#temp").innerText = temp + "°f";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

weather.fetchWeather("Detroit");
//end weather app


//begin web link button section
function newbutton() {
    var div = document.querySelector('.presetLinks');
    var input = document.querySelector('#getUrlForButton');

    var dom = '<a href="https://' + input.value + '.com' + '" target="_blank">';
    dom += '<input type="button" class="menu" value=" ' + input.value + ' "></a>';

    div.innerHTML += dom;
}
//end web link button section




// Jacob H's Section
fetch("http://api.mediastack.com/v1/news?access_key=e88991d67556e60781314a23d73242b8")
    .then((response) => response.json())
    .then((data) => displayNews(data))







// Jacob Z's Section
/* Fetching Kanye's wisdom */
async function getYeezy() {
    const response = await fetch('https://api.kanye.rest');
    const data = await response.json();
    document.getElementById('quote').innerHTML = "''" + data.quote + "''";
    console.log(data.quote);


}
getYeezy();
/* Tellng the time */
function time() {
    var currentDay = moment().format('dddd MMMM Do YYYY');
    var currentTime = moment().format('hh:mm');
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('day').innerHTML = currentDay;

}
setInterval(time, 1000);





// Andrew's Section
