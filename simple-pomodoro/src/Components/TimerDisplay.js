import React from 'react';


const startTimer = (duration, display) => {
    var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
}

// window.onload = function () {
//     var fiveMinutes = 60 * 5
        
//     startTimer(fiveMinutes, display);
// };


const TimerDisplay = ({ focusTime, restTime, phase, statusLabel }) => {
    let display = document.querySelector('#time');

    let timerDisplay;
    if (phase === 'focus' & statusLabel === true) {
        
        timerDisplay = focusTime*60

        
        startTimer(timerDisplay, display)

    } else if (phase === 'rest' & statusLabel === true) {
      
        timerDisplay = restTime*60
        startTimer(timerDisplay, display)

    } else {
        timerDisplay = focusTime*60

    }
 

    return ( 
    <div className = 'tc bg-light-green br3 h5 pa4 ma3 w-90 center' >
        <h1> TimerDisplay </h1> 
        <h1 id = 'time'> </h1>
        <h1> {timerDisplay} </h1> 
        <h2> {focusTime} </h2> 
        <h2> {restTime} </h2>
    </div>
    )
}

export default TimerDisplay;


//* <h2>{focusTime}</h2> */  
 /* <h2>{restTime}</h2> */ 