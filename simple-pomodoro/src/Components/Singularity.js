import { duration } from '@material-ui/core';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import './App.css';
// Components

const PrettySlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 12,
        borderRadius: 4,
    },
    rail: {
        height: 12,
        borderRadius: 4,
    },
})(Slider);

const Singularity = ({timerDisplay, focusTime, restTime}) => {

    return(
        <div>
        <div className = 'tc bg-light-green br3 h5 pa4 ma3 w-90 center' >
            <h1 className = 'f1'> {timerDisplay} </h1> 
            <h3> {focusTime} </h3> 
            <h3> {restTime} </h3>
        </div>

        <div className = 'center w-75'>
            <Typography 
            id = "discrete-slider"
            gutterBottom className = 'white' >
            Focus </Typography> 
            <PrettySlider defaultValue = { 0.1 }
            // getAriaValueText = { valuetext }
            aria-labelledby = "discrete-slider"
            valueLabelDisplay = "auto"
            step = { 0.1 }
            marks min = { 0 }
            max = { 60 }
            onChange = { focusTime }
            // valueLabelDisplay="off"
            /> 
            <Typography id = "discrete-slider"
            gutterBottom className = 'white' >
            Rest 
            </Typography> 
            <PrettySlider defaultValue = { 0.1 }
            // getAriaValueText = { valuetext }
            aria-labelledby = "discrete-slider"
            valueLabelDisplay = "auto"
            step = { 0.1 }
            marks min = { 0 }
            max = { 30 }
            onChange = { restTime }
            /> 
        </div>
    </div>
    )



}

export default Singularity