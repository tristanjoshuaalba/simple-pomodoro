import React from 'react';




// window.onload = function () {
//     var fiveMinutes = 60 * 5
        
//     startTimer(fiveMinutes, display);
// };
// let display = document.querySelector('#time');


const TimerDisplay = ({ focusTime, restTime, phase, statusLabel }) => {



    let timerDisplay;
    if (phase === 'focus' & statusLabel === true) {
        let ft;
        ft = focusTime * 60
        let minutes;
        let seconds;
        minutes = parseInt(ft / 60, 10);
        seconds = parseInt(ft % 60, 10);

        console.log(minutes, seconds)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  

    } else if (phase === 'rest' & statusLabel === true) {
        let rT;
        rT = restTime * 60
        let minutes;
        let seconds;
        minutes = parseInt(rT / 60, 10);
        seconds = parseInt(rT % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  

    } else {
        let fT;
        fT = focusTime * 60

        let minutes;
        let seconds;
        minutes = parseInt(fT / 60, 10);
        seconds = parseInt(fT % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  
    }
 


    return ( 
    <div className = 'tc bg-light-green br3 h5 pa4 ma3 w-90 center' >
        <h1> TimerDisplay </h1> 
        <h1> {timerDisplay} </h1> 
        <h2> {focusTime} </h2> 
        <h2> {restTime} </h2>
    </div>
    )
}

export default TimerDisplay;


//* <h2>{focusTime}</h2> */  
 /* <h2>{restTime}</h2> */ 