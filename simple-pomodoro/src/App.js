import { duration } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
// Components
import Controller from './Components/Controls';
import SliderInput from './Components/SliderInput';
import TimerDisplay from './Components/TimerDisplay';

// APP Class
class App extends Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.state = {
            focusTime: 0.1,
            restTime: 0.1,
            resetFocusTime: 0.1,
            resetRestTime: 0.1,
            status: false,
            phase: 'rest',
            displayTime: 6,
            clicks: 0,
            button: true

        }
        console.log(this.state)
    }

    forceUpdateHandler = () => {
        this.forceUpdate();
      };

    onfocusTimeChange = (event) => {
        this.setState({ focusTime: event.target.ariaValueNow 
                        , resetFocusTime: event.target.ariaValueNow 
                        , displayTime: event.target.ariaValueNow*60}, ()=> {console.log(this.displayTime) 
                            this.forceUpdateHandler()})
    }

    onrestTimeChange = (event) => {
        this.setState({ restTime: event.target.ariaValueNow 
                        , resetRestTime: event.target.ariaValueNow }, ()=> {console.log(this.displayTime) 
                            this.forceUpdateHandler()})
    }

    startTimer = (duration) => {
        console.log('TIMER HAS STARTED')
        let timer = duration*60;
        let countDown = duration*60

        const time = setInterval(() => {
            if (this.state.status === true) {
                timer--;
                countDown--;
                

                if (this.state.phase === 'focus') {
                    this.setState({ displayTime: timer })

                    this.setState({ focusTime: countDown/60},
                        () => {console.log('NEW FT: ', this.state.focusTime) 
                        this.forceUpdateHandler()})

                } else if (this.state.phase === 'rest') {
                    this.setState({ displayTime: timer })

                    this.setState({ restTime: countDown/60 },
                        () => {console.log('NEW RT: ', this.state.restTime)
                        this.forceUpdateHandler()})
                }
            }

            if (this.state.status === false) {
                clearInterval(time);
            }

            if (timer <= 0) {
                clearInterval(time);
            }
        }, 1000);
    }

    startTimerRest = (durationFocus, durationRest) => {

            const restTime = setTimeout(() => {
                if (this.state.status === true) {
                    this.startTimer(durationRest)
                    this.setState({ phase: 'rest' }, () => console.log(this.state.phase))

                    const alerta = setTimeout(() => {
                        alert('TIMES UP!')
                        

                        this.setState({button:true}, () => console.log(this.state.button))

                        this.setState({focusTime: this.state.resetFocusTime, 
                        restTime: this.state.resetRestTime, displayTime: this.state.resetFocusTime*60, status: false})
                      this.forceUpdateHandler()

                        this.setState({})
                        if (this.state.status === false) {
                            clearTimeout(restTime)
                            clearTimeout(alerta)
                            
                            
                            
                        }
                    }, durationRest * 60 * 1000)
                }

                if (this.state.status === false) {
                    clearTimeout(restTime);

                }


            }, durationFocus * 60 * 1000)

        }
        // startTimer(timerDisplay, display)

    onButtonClick = () => {
        this.setState({ clicks: this.state.clicks + 1 }, () => console.log('CLICK', this.state.clicks))


        if (this.state.status == false) {

            this.setState({ phase: 'focus', status: true }, () => console.log('START >>', this.state.phase, this.state.status))
                // this.setState({}, ()=> console.log(this.state.status))

            // if (this.state.clicks <= 1) {
            this.setState({button:false})
            this.startTimer(this.state.focusTime)
            console.log('FOCUS TIME: ', this.state.focusTime)
            this.startTimerRest(this.state.focusTime, this.state.restTime)


            // } else {
            //     this.startTimer(this.state.focusTime)
            //     this.setState({button:false})
            //     this.startTimerRest(this.state.focusTime / 60, this.state.restTime/60)
            // }

            console.log(this.state.restTime)

            // setTimeout(()=>{
            //   this.startTimerFocus(this.state.restTime*60)
            //   this.setState({phase:'rest'}, ()=> console.log(this.state.phase))

            // }, this.state.focusTime*60*1000)

            console.log('BUTTON CLICK', this.state)

        } else {
            // this.setState({focusTime:this.state.focusTime/60})
            this.setState({ phase: 'rest', status: false }, () => console.log('PAUSE >>', this.state.phase, this.state.status))
            console.log('BUTTON CLICK', this.state)
            clearTimeout()
                // this.setState({}, ()=> console.log(this.state.status))
                // this.setState({focusTime: this.state.focusTime/60}, ()=> console.log(this.state.focusTime))
        }
    }





    // To do: Add phase for timer
    render() {
        return ( <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5' >
            <h1 className = 'f2 tc white pt3' > Pomodoro </h1>  
            <TimerDisplay focusTime = { this.state.focusTime }
            restTime = { this.state.restTime }
            phase = { this.state.phase }
            statusLabel = { this.state.status }
            displayTime = { this.state.displayTime }
            clicks = { this.state.clicks }
            />  
            <SliderInput focusTime = { this.onfocusTimeChange }
            restTime = { this.onrestTimeChange }
            statusLabel = { this.state.status }
            />  
            <Controller status = { this.onButtonClick }
            statusLabel = { this.state.status }
            button = {this.state.button}
            /> </div>
        )
    }

}


export default App;




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