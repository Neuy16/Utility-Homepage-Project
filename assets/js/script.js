// Dakota's Section   

//light theme colors
var lightBlack = "#475569";
var lightGray = "#cbd5e1";
var lightLightGray = "#f1f5f9";

//dark theme colors
var darkBlack = "#0f172a";
var darkGray = "#1e293b";
var darkLightGray = "#475569";

//gets items from page
var sectionBox = document.getElementsByTagName("section");
var headerBox = document.getElementsByTagName("header");
var footerBox = document.getElementsByTagName("footer");
var calanderColor = document.getElementsByClassName("calanderStyle")[0];

// light mode toggle
document.querySelector(".toggleLight").addEventListener("click", function () {
  lightMode();
});

function lightMode() {
  //main background color
  document.body.style.backgroundColor = lightLightGray;
  //menu header background color
  headerBox[0].style.backgroundColor = lightGray;
  //kanye footer background color
  footerBox[0].style.backgroundColor = lightGray;
  //calander color
  calanderColor.style.backgroundColor = lightGray;
  //section boxes background color
  sectionBox[0].style.backgroundColor = lightGray;
  sectionBox[1].style.backgroundColor = lightGray;
  sectionBox[2].style.backgroundColor = lightGray;
  sectionBox[3].style.backgroundColor = lightGray;
  sectionBox[4].style.backgroundColor = lightGray;
  sectionBox[5].style.backgroundColor = lightGray;
  sectionBox[6].style.backgroundColor = lightGray;
}

// dark mode toggle
document.querySelector(".toggleDark").addEventListener("click", function () {
  darkMode();
});

function darkMode() {
  //background color
  document.body.style.backgroundColor = darkGray;
  //menu header background color
  headerBox[0].style.backgroundColor = darkLightGray;
  //kanye footer background color
  footerBox[0].style.backgroundColor = darkLightGray;
  //calander color
  calanderColor.style.backgroundColor = darkLightGray;
  //section boxes background color
  sectionBox[0].style.backgroundColor = darkLightGray;
  sectionBox[1].style.backgroundColor = darkLightGray;
  sectionBox[2].style.backgroundColor = darkLightGray;
  sectionBox[3].style.backgroundColor = darkLightGray;
  sectionBox[4].style.backgroundColor = darkLightGray;
  sectionBox[5].style.backgroundColor = darkLightGray;
  sectionBox[6].style.backgroundColor = darkLightGray;
}
//save weather to local storage
var saveWeatherBtn = document.querySelector(".saveWeatherBtn");
var userInput = document.querySelector(".searchBar");
const saveWeatherToLocalStorage = () => {
  localStorage.setItem("cityName", userInput.value)
}
saveWeatherBtn.addEventListener("click", saveWeatherToLocalStorage)
var savedCity = localStorage.getItem("cityName")

//begin weather app
let weather = {
  apiKey: "ce799edeec116539e35783770070d97d",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const temp = data.main['temp'];
    const icon = data.weather[0]['icon'];
    
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector("#temp").innerText = temp + " °f";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
weather.fetchWeather(savedCity);
//end weather app

//begin web link button section
function newbutton() {
  var div = document.querySelector('.presetLinks');
  var input = document.querySelector('#getUrlForButton');
  var webName = document.querySelector('#getWebName')
  var dom = '<a href="https://' + input.value + '.com' + '" target="_blank">';
  dom += '<input type="button" class="text-center align-middle mt-6 w-full flex-auto p-3 max-h-[10vh] text-slate-800 text-7xl transition-colors duration-150 bg-sky-300 rounded-lg focus:shadow-outline hover:bg-sky-500" value=" ' + webName.value + ' "></a>';
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
//display news article
function newsContent() {
  fetch("https://api.goperigon.com/v1/all?apiKey=71580e5a-7510-406c-adfa-9fee01756cf1")
    .then(response => response.json())
    .then(data => {
      var displayContent = document.getElementById("card");
      var randomArt = (data["articles"])[Math.floor(Math.random() * (data["articles"]).length)];
      var artSummary = randomArt["summary"];
      displayContent.innerHTML = artSummary;
    });
}
newsContent();

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

var saveBtn = document.getElementById('saveNoteBtn');


var clrBtn = document.getElementById('clrList');
var notes = JSON.parse(localStorage.getItem("allNotes"));
if (notes === null) notes = [];
function saveNote() {
  var newEntry = document.createElement('div');
  var board = document.getElementById('pinnedNotes');
  var entry = document.getElementById("note").value;
  var noteEntry = {
    'note': entry
  };
  localStorage.setItem('noteEntry', JSON.stringify(noteEntry));

  notes.push(noteEntry);
  localStorage.setItem('allNotes', JSON.stringify(notes));

  newEntry.textContent = entry;
  board.appendChild(newEntry);
}
function displayNote() {
  document.getElementById('note').value = '';
  for (let i = 0; i < notes.length; i++) {

    newItem = document.createElement('div');
    newItem.textContent = notes[i].note;
    document.getElementById('pinnedNotes').appendChild(newItem);
  };
}
displayNote();
function clear() {
  document.getElementById('pinnedNotes').innerHTML = '';
  localStorage.clear();
}

clrBtn.addEventListener('click', clear);
saveBtn.addEventListener('click', saveNote);
// Andrew's Section

// Calandar date
document.getElementById('calMonth').innerHTML = moment().format('MMMM');

let month = moment().format('MMMM');

// Appends Calander dates per month
let calandarBox = document.getElementById('calMain');
function calandarDates() {

  if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
    for (let m = 0; m < 30; m++) {
      let createDay = document.createElement("div");
      let day = m;
      calandarBox.appendChild(createDay);
      createDay.classList.add('border', 'border-slate-900', 'm-0.5', 'text-white', 'box-border', 'h-24', 'p-4');
      createDay.insertAdjacentHTML('beforeend', m + 1);
    }
  } else if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
    for (let m = 0; m < 31; m++) {
      let createDay = document.createElement("div");
      calandarBox.appendChild(createDay);
      createDay.setAttribute("class", 'border border-slate-900 m-0.5 text-slate-900 text-5xl box-border h-24 p-4');
      createDay.insertAdjacentHTML('beforeend', m + 1);
    }
  } else {
    for (let m = 0; m < 28; m++) {
      let createDay = document.createElement("div");
      calandarBox.appendChild(createDay);
      createDay.setAttribute("class", 'border border-slate-900 m-0.5 text-slate-900 text-5xl box-border h-24 p-4');
      createDay.insertAdjacentHTML('beforeend', m + 1);
    }
  };

}

calandarDates();
