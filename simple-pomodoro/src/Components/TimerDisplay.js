import React from 'react';

const TimerDisplay = ({ focusTime, restTime, phase, statusLabel, displayTime}) => {

    let timerDisplay;
    if (phase === 'focus' & statusLabel === true) {
        let ft;
        ft = displayTime
        
  
        let minutes;
        let seconds;
        minutes = parseInt(ft / 60, 10);
        seconds = parseInt(ft % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  

    } else if (phase === 'rest' & statusLabel === true) {
        let rT;
        rT = displayTime 
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
        let minutes;
        let seconds;
        minutes = parseInt(fT / 60, 10);
        seconds = parseInt(fT % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  
    } else {
        let fT;
        fT = displayTime
        
        
  
        let minutes;
        let seconds;
        minutes = parseInt(fT / 60, 10);
        seconds = parseInt(fT % 60, 10);

        // console.log(minutes, seconds)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay = minutes + ":" + seconds  
    }
 


    return ( 
    <div className = 'dt tc bg-freesia br3 mt3 mb3 vh-25 w-90 center' >
        <div className = 'dtc f-headline-l h-90 pa1 main-font gradient-salmon v-mid'> {timerDisplay} </div> 
    </div>
    )
}

export default TimerDisplay;


{/* <h3> {focusTime} </h3> 
<h3> {restTime} </h3> */}