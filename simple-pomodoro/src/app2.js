import { duration } from '@material-ui/core';
import React, {Component} from 'react';
import './App.css';
// Components
import Controller from './Components/Controls';
import SliderInput from './Components/SliderInput';
import TimerDisplay from './Components/TimerDisplay';

import Singularity from './Components/Singularity';

// APP Class
class App extends Component {
  constructor() {
    super();
    this.state = {
      resetStatus: false,
      resetFocusTime: 0.1,
      resetRestTime: 0.1,
      focusTime: 0.1,
      restTime: 0.1,
      status: false,
      phase: 'rest',
      displayTime: 6,
      clicks: 0
    }
  }

// To do: Add phase for timer
  render() {
    return(
      <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
        <h1 className = 'f2 tc white pt3'>Pomodoro</h1>
        <Singularity timerDisplay = {this.state.focusTime} focusTime = {this.state.focusTime} restTime = {this.state.restTime} />

      </div>
    )
  }

}


export default App;

