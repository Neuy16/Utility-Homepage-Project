// Dakota's Section



//dakota edit test




// Jacob H's Section









// Jacob Z's Section
/* Fetching Kanye's wisdom */
async function getYeezy() {
    const response = await fetch('https://api.kanye.rest');
    const data = await response.json();
    
    console.log(data);

    
}
getYeezy();
/* Tellng the time */
function time() {
    var currentDay = moment().format('dddd MMMM Do YYYY');
    var currentTime = moment().format('hh:mm:ss');

    console.log(currentDay);
    console.log(currentTime);
}
time();





// Andrew's Section