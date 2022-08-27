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
    dom += '<input type="button" class="rounded border-10 border-sky-300 bg-sky-300" value=" ' + input.value  + ' "></a>';

    div.innerHTML += dom;
}
//end web link button section


//begin menu section
//schedule modal
var scheduleModal = document.getElementById("scheduleModal");
var scheduleModalBtn = document.getElementById("scheduleModalBtn");
var scheduleCloseBtn = document.getElementsByClassName("closeBtn")[0];
 
scheduleModalBtn.addEventListener("click", openScheduleModal);
scheduleCloseBtn.addEventListener("click", closeScheduleModal);
window.addEventListener("click", clickOutsideScheduleModal);

function openScheduleModal () {
  scheduleModal.style.display = "block";
}

function closeScheduleModal () {
  scheduleModal.style.display = "none";
}

function clickOutsideScheduleModal (scheduleEvent) {
  if (scheduleEvent.target == scheduleModal) {
    scheduleModal.style.display = "none";
  }
}

//web link modal
var webLinkModal = document.getElementById("webLinklModal");
var webLinkModalBtn = document.getElementById("webLinkModalBtn");
var webLinkCloseBtn = document.getElementsByClassName("webCloseBtn")[0];
 
webLinkModalBtn.addEventListener("click", openWebLinkModal);
webLinkCloseBtn.addEventListener("click", closeWebLinkModal);
window.addEventListener("click", clickOutsideWebLinkModal);

function openWebLinkModal () {
  webLinkModal.style.display = "block";
}

function closeWebLinkModal () {
  webLinkModal.style.display = "none";
}

function clickOutsideWebLinkModal (webLinkEvent) {
  if (webLinkEvent.target == webLinkModal) {
    webLinkModal.style.display = "none";
  }
}
//settings modal

//end menu section
// Jacob H's Section
fetch("http://api.mediastack.com/v1/news?access_key=e88991d67556e60781314a23d73242b8")
    .then((response) => response.json())
    .then((data) => console.log(data));






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
    document.getElementById('date').innerHTML = currentDay;

}
setInterval(time, 1000);





// Andrew's Section
