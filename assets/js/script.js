// Dakota's Section








// Jacob H's Section









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