import { duration } from '@material-ui/core';
import React, {Component} from 'react';
import './App.css';
// Components
import Controller from './Components/Controls';
import SliderInput from './Components/SliderInput';
import TimerDisplay from './Components/TimerDisplay';

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
    console.log(this.state) 
  }

  onfocusTimeChange = (event) => {
    this.setState({focusTime: event.target.ariaValueNow, resetFocusTime: event.target.ariaValueNow})
  }

  onrestTimeChange = (event) => {
    this.setState({restTime: event.target.ariaValueNow, resetRestTime: event.target.ariaValueNow})
  }

  // clockTickFocus = (timeLeft) => {
  //   const timer = setInterval(()=> {
  //     timeLeft--;
  //     if(this.state.resetStatus === false){
  //       this.setState({focusTime:timeLeft})
  //     }
      
  //     if(this.state.status === false | this.state.resetStatus === true){
  //       clearInterval(timer);
  //     }

  //     if(timeLeft<=0){
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  //   }

  //  clockTickRest = (timeLeft) => {
  //   const timer = setInterval(()=> {
  //     timeLeft--;
  //     if(this.state.resetStatus === false){
  //       this.setState({restTime:timeLeft})
  //     }
      
  //     if(this.state.status === false | this.state.resetStatus === true){
  //       clearInterval(timer);
  //     }

  //     if(timeLeft<=0){
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  //   }
 
  startTimerFocus = (duration) => {
    let timer = duration, minutes, seconds;
    let countDown = duration

    const time = () => setInterval(() => {
        if(this.state.resetStatus === false){
          timer--;
          countDown--;
          // this.setState({focusTime:timer})
          this.setState({displayTime: timer})
          if(this.state.status === true & this.state.phase === 'focus'){
            this.setState({focusTime: countDown}, ()=>console.log('NEW FT: ', this.state.focusTime))
          } else if(this.state.status === true & this.state.phase === 'rest') {
            this.setState({restTime: countDown}, ()=>console.log('NEW RT: ', this.state.restTime))
          }
        }
        
        if(this.state.status === false | this.state.resetStatus === true){
          clearInterval(time);
        }

        if(timer<=0){
          clearInterval(time);
        
          // this.setState({status: false})
        }
      }, 1000);
    }

    startTimerRest = (durationFocus, durationRest) => {
       const restTime = () => setTimeout(()=>{
        if(this.state.resetStatus === false){
          this.startTimerFocus(durationRest)
          this.setState({phase:'rest'}, ()=> console.log(this.state.phase))

          const alerta = () => setTimeout(()=>{
            if(this.state.resetStatus === false){
            alert('TIMES UP!')
            // this.setState({status:false})
            this.onResetClick()
            }
            if(this.state.status === false | this.state.resetStatus === true){
              clearTimeout(restTime)
              clearTimeout(alerta);
            }
          }, durationFocus*60*1000)

        }

        if(this.state.status === false | this.state.resetStatus === true){
          clearTimeout(restTime);
          
        }

        
      }, durationFocus*60*1000)
      
    }
  // startTimer(timerDisplay, display)

  onButtonClick = () => {

    this.setState({clicks:this.state.clicks+1}, ()=>console.log('CLICK', this.state.clicks))
    console.log('BUTTON CLICK', this.state)

    if(this.state.status == false){

      this.setState({phase:'focus',status: true}, ()=> console.log('START >>', this.state.phase, this.state.status))
      // this.setState({}, ()=> console.log(this.state.status))

      if(this.state.clicks <= 1){
        this.startTimerFocus(this.state.focusTime*60)
      console.log('FOCUS TIME: ', this.state.focusTime)
      this.startTimerRest(this.state.focusTime, this.state.restTime*60)

      } else {
        this.startTimerFocus(this.state.focusTime)
        this.startTimerRest(this.state.focusTime/60, this.state.restTime)
      }
      
      console.log(this.state.restTime)

      // setTimeout(()=>{
      //   this.startTimerFocus(this.state.restTime*60)
      //   this.setState({phase:'rest'}, ()=> console.log(this.state.phase))

      // }, this.state.focusTime*60*1000)

      

    } else {
      // this.setState({focusTime:this.state.focusTime/60})
      this.setState({phase:'rest',status: false}, ()=> console.log('PAUSE >>', this.state.phase, this.state.status))
      clearTimeout()
      // this.setState({}, ()=> console.log(this.state.status))
      // this.setState({focusTime: this.state.focusTime/60}, ()=> console.log(this.state.focusTime))
    }
  }

  // onButtonClick = () => {


  //   if(this.state.status == false){

  //     this.setState({phase:'focus'}, ()=> console.log(this.state.phase))
  //     this.setState({status: true}, ()=> console.log(this.state.status))


  //     this.clockTickFocus(this.state.focusTime)

  //     setTimeout(()=>{
  //       this.clockTickRest(this.state.restTime)
  //       this.setState({phase:'rest'}, ()=> console.log(this.state.phase))

  //     }, this.state.focusTime*1000)

  //   } else {
  //     this.setState({phase:'rest'}, ()=> console.log(this.state.phase))
  //     this.setState({status: false}, ()=> console.log(this.state.status))
  //   }
  // }

  onResetClick = () => {
    if(this.state.resetStatus === false) {
      this.setState({clicks:this.state.clicks+1})
      this.setState({displayTime:this.state.focusTime})
      this.setState({resetStatus: true})
      this.setState({focusTime: this.state.resetFocusTime*60}, ()=> console.log(this.state.focusTime))
      this.setState({restTime: this.state.resetRestTime*60}, ()=> console.log(this.state.restTime))
      this.setState({status: false})
    } 
    setTimeout(()=> {this.setState({resetStatus: false})}, 1000)
  }

// To do: Add phase for timer
  render() {
    return(
      <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
        <h1 className = 'f2 tc white pt3'>Pomodoro</h1>
        <TimerDisplay focusTime = {this.state.focusTime} restTime = {this.state.restTime} phase = {this.state.phase} reset = {this.state.resetStatus}
        statusLabel = {this.state.status} displayTime = {this.state.displayTime} clicks = {this.state.clicks}/>
        <SliderInput focusTime = {this.onfocusTimeChange} restTime = {this.onrestTimeChange} statusLabel = {this.state.status}/>
        <Controller status = {this.onButtonClick} reset = {this.onResetClick} statusLabel = {this.state.status}/>
      </div>
    )
  }

}


export default App;

