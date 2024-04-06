let hour = 0;
let minute = 0;
let second = 0;
let msecond = 0;
let t;
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('secondes');
const mseconds = document.getElementById('msecondes');
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnStop = document.querySelector('.stop');

// état chrono lors du chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  mseconds.innerHTML = msecond;
  seconds.innerHTML = second;
  minutes.innerHTML = minute;
  hours.innerHTML = hour;
});

// initiatilsation du chrono
function chrono() {
  msecond += 1;
  if (msecond == 10) {
    msecond = 0;
    second += 1;
  }
  if (second == 60) {
    second = 0;
    minute += 1;
  }

  if (minute == 60) {
    minute = 0;
    hour += 1;
  }

  mseconds.innerHTML = msecond;
  seconds.innerHTML = second;
  minutes.innerHTML = minute;
  hours.innerHTML = hour;
}

btnStart.addEventListener('click', () => {
  t = setInterval(chrono, 100);
});

btnReset.addEventListener('click', () => {
  clearInterval(t);
  btnStart.disabled = false;
  mseconds.innerHTML = 0;
  seconds.innerHTML = 0;
  minutes.innerHTML = 0;
  hours.innerHTML = 0;
});

btnStop.addEventListener('click', () => {
  clearInterval(t);
  btnStart.disabled = false;
});
