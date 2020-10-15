import React from 'react';




// window.onload = function () {
//     var fiveMinutes = 60 * 5
        
//     startTimer(fiveMinutes, display);
// };
// let display = document.querySelector('#time');


const TimerDisplay = ({ focusTime, restTime, phase, statusLabel, displayTime, clicks, reset}) => {
    


    let timerDisplay;
    if (phase === 'focus' & statusLabel === true) {
        let ft;
        ft = displayTime
        
  
        let minutes;
        let seconds;
        minutes = parseInt(ft / 60, 10);
        seconds = parseInt(ft % 60, 10);

        // console.log(minutes, seconds)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  

    } else if (phase === 'rest' & statusLabel === true) {
        let rT;
        rT = restTime 
        let minutes;
        let seconds;
        minutes = parseInt(rT / 60, 10);
        seconds = parseInt(rT % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  

    } else if (phase === 'focus' & statusLabel === false) {
        let fT;
        fT = displayTime
        // fT = focusTime;

        let minutes;
        let seconds;
        minutes = parseInt(focusTime / 60, 10);
        seconds = parseInt(focusTime % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  
    } else if (reset === true) {
        console.log('HAKDOG')

        let fT;
        fT = displayTime
        // fT = focusTime;

        let minutes;
        let seconds;
        minutes = parseInt(focusTime / 60, 10);
        seconds = parseInt(focusTime % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  
    
    }else {
        let ft;
        if (clicks <= 1){
            ft = focusTime*60
        } else {
            ft = focusTime*60
        }
        
        
  
        let minutes;
        let seconds;
        minutes = parseInt(ft / 60, 10);
        seconds = parseInt(ft % 60, 10);

        // console.log(minutes, seconds)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  
    }
 


    return ( 
    <div className = 'tc bg-light-green br3 h5 pa4 ma3 w-90 center' >
        {/* <h1> TimerDisplay </h1>  */}
        <h1 className = 'f1'> {timerDisplay} </h1> 
        <h3> {focusTime} </h3> 
        <h3> {restTime} </h3>
    </div>
    )
}

export default TimerDisplay;


//* <h2>{focusTime}</h2> */  
 /* <h2>{restTime}</h2> */ 