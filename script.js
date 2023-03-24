// Accessing DOM Elements 
let timer = document.getElementsByClassName('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

// global variables
let seconds = 0;
let minutes = 0;
let interval;


// function to start timer 
function startTimer(){
    interval = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

// function to stop timer 
function stopTimer(){
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// function reset
function resetTimer(){
    clearInterval(interval);
    timer[0].textContent = "00:00";
    seconds = 0;
    minutes = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// function to update the timer each second 
function updateTimer(){
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
    }
    if(minutes<10 && seconds<10){
        timer[0].textContent = "0" + minutes + ":0" + seconds;    
    }else if(minutes<10 && seconds>=10){
        timer[0].textContent = "0" + minutes + ":" + seconds;
    }else {
        timer[0].textContent = minutes + ":" + seconds;
    }    
}

// event listeners
// event listener for start button
startBtn.addEventListener('click', () => {
    startTimer();
});

// event listener for stop button
stopBtn.addEventListener('click', () => {
    stopTimer();
});

// event listener for reset button
resetBtn.addEventListener('click', () => {
    resetTimer();
});


