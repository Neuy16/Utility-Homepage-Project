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
var div = document.querySelector('.presetLinks');
var input = document.querySelector('#getUrlForButton');
function newbutton() {
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
            createDay.classList.add('border', 'border-slate-500', 'm-0.5', 'text-white', 'box-border', 'h-24', 'p-4');
            createDay.insertAdjacentHTML( 'beforeend', m+1);
        }
    } else if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
        for (let m = 0; m < 31; m++) {
            let createDay = document.createElement("div");
            calandarBox.appendChild(createDay);
            createDay.setAttribute("class", 'border border-slate-500 m-0.5 text-white box-border h-24 p-4');
            createDay.insertAdjacentHTML( 'beforeend', m+1);
        }
    } else {
        for (let m = 0; m < 28; m++) {
            let createDay = document.createElement("div");
            calandarBox.appendChild(createDay);
            createDay.setAttribute("class", 'border border-slate-500 m-0.5 text-white box-border h-24 p-4');
            createDay.insertAdjacentHTML( 'beforeend', m+1);
        }
    };

}

calandarDates();
