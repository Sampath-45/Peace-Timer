let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");

let timerTextEl = document.getElementById("timerText");

let secondsLeft = 0;
let text = "Your moment is complete";
let timerId;

function clearPrevTimers() {
    clearInterval(timerId);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft -= 1;
        timerTextEl.textContent = secondsLeft + "seconds left";
    } else {
        clearPrevTimers();
        timerTextEl.textContent = text;
    }
}

function setTimerShow() {
    timerTextEl.textContent = secondsLeft + "seconds left";
    timerId = setInterval(startTimer, 1000);
}


twentySecondsBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPrevTimers();
    setTimerShow();
}

thirtySecondsBtnEl.onclick = function() {
    secondsLeft = 30;
    clearPrevTimers();
    setTimerShow();
}

fortySecondsBtnEl.onclick = function() {
    secondsLeft = 40;
    clearPrevTimers();
    setTimerShow();
}

oneMinuteBtnEl.onclick = function() {
    secondsLeft = 60;
    clearPrevTimers();
    setTimerShow();
}