const close = document.querySelector('div.modal div.close');
const modal = document.querySelector('div.modal');

// close.addEventListener('close', e => {
//     modal.style.display = 'none';  
// })

let newYear = new Date("1 Jan 2024");

let daysElm = document.querySelector('div p span.days');
let hoursElm = document.querySelector('div p span.hours');
let minsElm = document.querySelector('div p span.mins');
let secsElm = document.querySelector('div p span.secs');

let countdownPage = document.querySelector('body#countdown');

let daysElmP = document.querySelector('div p.days');
let hoursElmP = document.querySelector('div p.hours');
let minsElmP = document.querySelector('div p.mins');
let secsElmP = document.querySelector('div p.secs');

let fireworks = document.querySelector('section#countdown img')

let navNewYearsButton = document.querySelector('a.new-years-countdown')

const beginCountdown = () => {
    let currYear = new Date();
    let diff = newYear - currYear;

    let totalSecs = diff/ 1000;

    let days = Math.floor(totalSecs / 3600 / 24);
    let hours = Math.floor(totalSecs / 3600) % 24;
    let mins = Math.floor(totalSecs / 60)% 60;
    let secs = Math.floor(totalSecs) % 60;

    // console.log(days, hours, mins, secs);

    // days = 0;
    // hours = 0;
    // mins = 0;
    // secs = 0;

    daysElm.textContent = days;
    hoursElm.textContent = hours;
    minsElm.textContent = mins;
    secsElm.textContent = secs;

}

beginCountdown();
setInterval(beginCountdown, 1000);

if (daysElm.textContent == 0 && hoursElm.textContent == 0 && minsElm.textContent == 0 && secsElm.textContent == 0) {
    countdownPage.style.background = 'url("/assets/extras/fireworks-bg.gif")';
    countdownPage.style.backgroundRepeat = 'no-repeat';
    countdownPage.style.backgroundSize = '140%';


    daysElmP.style.background = 'rgb(196, 38, 38, .6)';
    hoursElmP.style.background = 'rgb(196, 38, 38, .7)';
    minsElmP.style.background = 'rgb(196, 38, 38, .7)';
    secsElmP.style.background = 'rgb(196, 38, 38, .7)';

    // fireworks.style.display = 'block';
    navNewYearsButton.style.display = 'none';
}