// Importing React using Webpock
import React, { Component } from 'react';
// Importing styling for App Parent Component
import './App.css';
// Importing Components
import Controller from '../Components/Controls';
import SliderInput from '../Components/SliderInput';
import TimerDisplay from '../Components/TimerDisplay';

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
            button: true,
            cycle:0
        }
    }

    forceUpdateHandler = () => {
        this.forceUpdate();
    };

    // Getting the value of the sliderInput to change the state of the timer
    onfocusTimeChange = (event) => {
        this.setState({
            focusTime: event.target.ariaValueNow,
            resetFocusTime: event.target.ariaValueNow,
            displayTime: event.target.ariaValueNow * 60
        }, () => {
            console.log(this.state.displayTime);
            this.forceUpdateHandler();
        })
    }

    onrestTimeChange = (event) => {
        this.setState({
            restTime: event.target.ariaValueNow,
            resetRestTime: event.target.ariaValueNow
        }, () => {
            console.log(this.state.displayTime);
            this.forceUpdateHandler();
        })
    }

    // Creating a function for the countdown timer
    startTimer = (duration) => {
        console.log('The timer has started: ', this.state.phase)

        // Creating separate variables for display and for state change
        let timer = duration * 60;
        let countDown = duration * 60;

        // Using setInterval() method to create a countdown
        const time = setInterval(() => {
            if (this.state.status === true) {
                timer--;
                countDown--;

                // Checking which phase the pomodoro is in: FOCUS
                if (this.state.phase === 'focus') {
                    this.setState({ displayTime: timer });

                    this.setState({ focusTime: countDown / 60 },
                        () => {
                            console.log('Updated focusTime: ', this.state.focusTime.toFixed(2));
                            this.forceUpdateHandler();
                        });

                // Checking which phase the pomodoro is in: REST
                } else if (this.state.phase === 'rest') {
                    this.setState({ displayTime: timer });

                    this.setState({ restTime: countDown / 60 },
                        () => {
                            console.log('Updated restTime: ', this.state.restTime.toFixed(2));
                            this.forceUpdateHandler();
                        });
                }
            }

            // If logic to capture PAUSE state
            if (this.state.status === false) {
                clearInterval(time);
            }

            // If logic to capture TIMER DONE
            if (timer <= 0) {
                clearInterval(time);
            }
        }, 1000);
    }

    startTimerRest = (durationFocus, durationRest) => {
            // Using setTimeout() to delay the REST Phase
            const restTime = setTimeout(() => {
                // If logic to check if the timer is still running
                if (this.state.status === true) {
                    this.startTimer(durationRest)
                    // Changing the phase state to REST
                    this.setState({ phase: 'rest' }, () => console.log('The timer has started: ', this.state.phase))

                    const alerta = setTimeout(() => {
                        // Displaying a pop-up to alert end of timer
                        alert('Good Job! You finished a cycle!')
                        // Enabling button again using button state = True
                        this.setState({ button: true }, () => console.log(this.state.button))
                        this.setState({
                            focusTime: this.state.resetFocusTime,
                            restTime: this.state.resetRestTime,
                            displayTime: this.state.resetFocusTime * 60,
                            status: false,
                            cycle: this.state.cycle + 1
                        })
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
            this.setState({ button: false })
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
        return ( 
        
        <div className = 'center w-third vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
            <h1 className = 'f2 tc white pt3'> Pomodoro </h1>   
            <h2 className = 'tc white'> Cycle = {this.state.cycle} </h2>
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
            button = { this.state.button }
            /> </div >
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