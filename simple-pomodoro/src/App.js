import React, {Component} from 'react';
import './App.css';
// Components
import Controller from './components/Controls';
import SliderInput from './components/SliderInput';
import TimerDisplay from './components/TimerDisplay';

// APP Class
class App extends Component {
  constructor() {
    super();
    this.state = {
      resetStatus: false,
      resetFocusTime: 25,
      resetRestTime: 5,
      focusTime: 25,
      restTime: 5,
      status: false,
      phase: 'rest'
    }
    console.log(this.state)
  }

  onfocusTimeChange = (event) => {
    this.setState({focusTime: event.target.ariaValueNow, resetFocusTime: event.target.ariaValueNow})
  }

  onrestTimeChange = (event) => {
    this.setState({restTime: event.target.ariaValueNow, resetRestTime: event.target.ariaValueNow})
  }

  clockTickFocus = (timeLeft) => {
    const timer = setInterval(()=> {
      timeLeft--;
      if(this.state.resetStatus === false){
        this.setState({focusTime:timeLeft})
      }
      
      if(this.state.status === false | this.state.resetStatus === true){
        clearInterval(timer);
      }

      if(timeLeft<=0){
        clearInterval(timer);
      }
    }, 1000);
    }

   clockTickRest = (timeLeft) => {
    const timer = setInterval(()=> {
      timeLeft--;
      if(this.state.resetStatus === false){
        this.setState({restTime:timeLeft})
      }
      
      if(this.state.status === false | this.state.resetStatus === true){
        clearInterval(timer);
      }

      if(timeLeft<=0){
        clearInterval(timer);
      }
    }, 1000);
    }
 

  onButtonClick = () => {


    if(this.state.status == false){

      this.setState({phase:'focus'}, ()=> console.log(this.state.phase))
      this.setState({status: true}, ()=> console.log(this.state.status))


      this.clockTickFocus(this.state.focusTime)

      setTimeout(()=>{
        this.clockTickRest(this.state.restTime)
        this.setState({phase:'rest'}, ()=> console.log(this.state.phase))

      }, this.state.focusTime*1000)

    } else {
      this.setState({phase:'rest'}, ()=> console.log(this.state.phase))
      this.setState({status: false}, ()=> console.log(this.state.status))
    }
  }

  onResetClick = () => {
    if(this.state.resetStatus === false) {
      this.setState({resetStatus: true})
      this.setState({focusTime: this.state.resetFocusTime})
      this.setState({restTime: this.state.resetRestTime})
      this.setState({status: false})
    } 
    setTimeout(()=> {this.setState({resetStatus: false})}, 1000)
  }

// To do: Add phase for timer
  render() {
    return(
      <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
        <h1 className = 'f2 tc white pt3'>Pomodoro</h1>
        <TimerDisplay focusTime = {this.state.focusTime} restTime = {this.state.restTime} phase = {this.state.phase} statusLabel = {this.state.status}/>
        <SliderInput focusTime = {this.onfocusTimeChange} restTime = {this.onrestTimeChange}/>
        <Controller status = {this.onButtonClick} reset = {this.onResetClick} statusLabel = {this.state.status}/>
      </div>
    )
  }

}


export default App;

