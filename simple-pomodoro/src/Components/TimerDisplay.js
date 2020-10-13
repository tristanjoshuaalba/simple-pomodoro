import React from 'react';


const TimerDisplay = ({ focusTime, restTime, phase, statusLabel }) => {
    let timerDisplay;
    if (phase === 'focus' & statusLabel === true) {
        timerDisplay = focusTime
    } else if (phase === 'rest' & statusLabel === true) {
        timerDisplay = restTime
    } else {
        timerDisplay = focusTime
    }

    return ( <
        div className = 'tc bg-light-green br3 h5 pa4 ma3 w-90 center' >
        <
        h1 > TimerDisplay < /h1> <
        h1 > { timerDisplay } < /h1> <
        /div>
    )
}

export default TimerDisplay;


{ /* <h2>{focusTime}</h2> */ } { /* <h2>{restTime}</h2> */ }