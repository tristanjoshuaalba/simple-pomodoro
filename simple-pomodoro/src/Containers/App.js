// Importing React using Webpock
import React, { Component } from 'react';
// Importing styling for App Parent Component
import './App.css';
// Importing Components
import Controller from '../Components/Controls';
import SliderInput from '../Components/SliderInput';
import TimerDisplay from '../Components/TimerDisplay';
import CycleCount from '../Components/CycleCount';

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
            displayTime: 25*60,
            button: true,
            cycle:0
        }
    }

    // Creating a forceUpdate() function to render components forcibly
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
                        // Resetting the state values by referring to the reset values
                        // Adding 1 to the cycle count
                        this.setState({
                            focusTime: this.state.resetFocusTime,
                            restTime: this.state.resetRestTime,
                            displayTime: this.state.resetFocusTime * 60,
                            status: false,
                            cycle: this.state.cycle + 1
                        })
                        // Force render the entire page
                        this.forceUpdateHandler()

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


    onButtonClick = () => {
        // this.setState({ clicks: this.state.clicks + 1 }, () => console.log('CLICK', this.state.clicks))

        if (this.state.status == false) {
            // Setting phase to FOCUS
            this.setState({ phase: 'focus', status: true }, () => console.log('The timer has started: ', this.state.phase))
            // Disabling the button using the button state
            this.setState({ button: false })
            // Starting the timer using the startTimer() function
            this.startTimer(this.state.focusTime)
            console.log('Total focusTime: ', this.state.focusTime*60, 's')

            // Running the rest timer ASYNC 
            this.startTimerRest(this.state.focusTime, this.state.restTime)
            console.log('Total restTime: ', this.state.restTime*60, 's')

        // Logic provision for PAUSE functionality: UNDER DEVELOPMENT
        } else {
            this.setState({ phase: 'rest', status: false })
            clearTimeout()
        }
    }


    render() {
        return ( 
        
        <div className = 'center w-75 w-60-m w-40-ns vh-75 ma5 bg-light-red br3 b-dashed shadow-5'>
            

            <div className = 'f1 tc white pt4 main-font'> Simple Pomodoro </div>

            <div className = 'f4 tc white pa2 pb4 text-font'> Get things done with this simple timer </div>
            {/* <div className = 'ba b--near-white shadow-0'></div> */}

            < CycleCount
                cycle = { this.state.cycle }
            />

            <TimerDisplay 
                focusTime = { this.state.focusTime }
                restTime = { this.state.restTime }
                phase = { this.state.phase }
                statusLabel = { this.state.status }
                displayTime = { this.state.displayTime }
                clicks = { this.state.clicks }
            />   
            
            <SliderInput 
                focusTime = { this.onfocusTimeChange }
                restTime = { this.onrestTimeChange }
                statusLabel = { this.state.status }
            />   
            
            <Controller 
                status = { this.onButtonClick }
                statusLabel = { this.state.status }
                button = { this.state.button }
            /> 
        
        </div >
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