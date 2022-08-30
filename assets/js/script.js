// Dakota's Section   verylight#f1f5f9 light#cbd5e1   dark#475569 verydark#1e293b 

// light mode toggle
var sectionBox = document.getElementsByTagName("section");
var headerBox = document.getElementsByTagName("header");
var footerBox = document.getElementsByTagName("footer");

document.querySelector(".toggleLight").addEventListener("click", function () {
  lightMode();
});
function lightMode() {
  //main background color
  document.body.style.backgroundColor = "#cbd5e1";

  //menu background coloor
  headerBox[0].style.backgroundColor = "#f1f5f9";

  //date background color
  footerBox[0].style.backgroundColor = "#f1f5f9";

  //time background color
  sectionBox[0].style.backgroundColor = "#f1f5f9";

  //button background color
  sectionBox[1].style.backgroundColor = "#f1f5f9";

  //weather background color
  sectionBox[2].style.backgroundColor = "#f1f5f9";

  //notes background color
  sectionBox[3].style.backgroundColor = "#f1f5f9";

  //news background color
  sectionBox[4].style.backgroundColor = "#f1f5f9";

  //yeezy background color
  sectionBox[5].style.backgroundColor = "#f1f5f9";
}

// dark mode toggle
document.querySelector(".toggleDark").addEventListener("click", function () {
  darkMode();
});
function darkMode() {
  //main background color
  document.body.style.backgroundColor = "#1e293b";

  //menu background coloor
  headerBox[0].style.backgroundColor = "#475569";

  //date background color
  footerBox[0].style.backgroundColor = "#475569";

  //time background color
  sectionBox[0].style.backgroundColor = "#475569";

  //button background color
  sectionBox[1].style.backgroundColor = "#475569";

  //weather background color
  sectionBox[2].style.backgroundColor = "#475569";

  //notes background color
  sectionBox[3].style.backgroundColor = "#475569";

  //news background color
  sectionBox[4].style.backgroundColor = "#475569";

  //yeezy background color
  sectionBox[5].style.backgroundColor = "#475569";
}

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
    document.querySelector("#temp").innerText = temp + " °f";
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
  dom += '<input type="button" class="mt-6 w-full min-h-[10vh] text-slate-800 text-7xl transition-colors duration-150 bg-sky-300 rounded-lg focus:shadow-outline hover:bg-sky-500" value=" ' + input.value + ' "></a>';

  div.innerHTML += dom;
}
//end web link button section


//begin menu section
//schedule modal
var modal1 = document.getElementById("modal1");
var modalBtn1 = document.getElementById("modalBtn1");
var closeBtn1 = document.getElementsByClassName("closeBtn1")[0];

modalBtn1.addEventListener("click", openModal1);
closeBtn1.addEventListener("click", closeModal1);
window.addEventListener("click", clickOutsideModal1);

function openModal1() {
  modal1.style.display = "block";
}

function closeModal1() {
  modal1.style.display = "none";
}

function clickOutsideModal1(event1) {
  if (event1.target == modal1) {
    modal1.style.display = "none";
  }
}

//web link modal
var modal2 = document.getElementById("modal2");
var modalBtn2 = document.getElementById("modalBtn2");
var closeBtn2 = document.getElementsByClassName("closeBtn2")[0];

modalBtn2.addEventListener("click", openModal2);
closeBtn2.addEventListener("click", closeModal2);
window.addEventListener("click", clickOutsideModal2);

function openModal2() {
  modal2.style.display = "block";
}

function closeModal2() {
  modal2.style.display = "none";
}

function clickOutsideModal2(event2) {
  if (event2.target == modal2) {
    modal2.style.display = "none";
  }
}

//Notes modal
var modal3 = document.getElementById("modal3");
var modalBtn3 = document.getElementById("modalBtn3");
var closeBtn3 = document.getElementsByClassName("closeBtn3")[0];

modalBtn3.addEventListener("click", openModal3);
closeBtn3.addEventListener("click", closeModal3);
window.addEventListener("click", clickOutsideModal3);

function openModal3() {
  modal3.style.display = "block";
}

function closeModal3() {
  modal3.style.display = "none";
}

function clickOutsideModal3(event3) {
  if (event3.target == modal3) {
    modal3.style.display = "none";
  }
}

//settings modal
var modal4 = document.getElementById("modal4");
var modalBtn4 = document.getElementById("modalBtn4");
var closeBtn4 = document.getElementsByClassName("closeBtn4")[0];

modalBtn4.addEventListener("click", openModal4);
closeBtn4.addEventListener("click", closeModal4);
window.addEventListener("click", clickOutsideModal4);

function openModal4() {
  modal4.style.display = "block";
}

function closeModal4() {
  modal4.style.display = "none";
}

function clickOutsideModal4(event4) {
  if (event4.target == modal4) {
    modal4.style.display = "none";
  }
}
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
  document.getElementById('quote').innerHTML = "''" + data.quote + "''" + '  -Kanye West';


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
