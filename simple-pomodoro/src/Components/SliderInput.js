import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



// const useStyles = makeStyles({
//     root: {
//       width: 300,
//     },
//   });

const valuetext = (value) => {
    return `${value}°C`;
}

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

const SliderInput = ({ focusTime, restTime , statusLabel}) => {
        if(statusLabel === true){
            return ( <div className = 'center w-75' >
            <Typography 
            id = "discrete-slider"
            gutterBottom className = 'white' >
            <div className = 'f5 white text-font'> 
            Concentrate
            </div>
            </Typography> 
            <PrettySlider defaultValue = { 25 }
            getAriaValueText = { valuetext }
            aria-labelledby = "discrete-slider"
            valueLabelDisplay = "auto"
            step = { 5 }
            marks min = { 10 }
            max = { 60 }
            onChange = { focusTime }
            disabled
            // valueLabelDisplay="off"
            /> 
            <Typography id = "discrete-slider"
            gutterBottom className = 'white' >
            <div className = 'f5 white text-font'> 
            Relax
            </div>
            </Typography> 
            <PrettySlider defaultValue = { 5 }
            getAriaValueText = { valuetext }
            aria-labelledby = "discrete-slider"
            valueLabelDisplay = "auto"
            step = { 5 }
            marks min = { 0 }
            max = { 30 }
            onChange = { restTime }
            disabled
            /> </div>)

        } else {
            return ( <div className = 'center w-75' >
            <Typography 
            id = "discrete-slider"
            gutterBottom className = 'white' >
            <div className = 'f5 white text-font'> 
            Concentrate
            </div>
            </Typography> 
            <PrettySlider defaultValue = { 25 }
            getAriaValueText = { valuetext }
            aria-labelledby = "discrete-slider"
            valueLabelDisplay = "auto"
            step = { 5 }
            marks min = { 10 }
            max = { 60 }
            onChange = { focusTime }

            // valueLabelDisplay="off"
            /> 
            <Typography id = "discrete-slider"
            gutterBottom className = 'white' >
            <div className = 'f5 white text-font'> 
            Relax
            </div>
            </Typography> 
            <PrettySlider defaultValue = { 5 }
            getAriaValueText = { valuetext }
            aria-labelledby = "discrete-slider"
            valueLabelDisplay = "auto"
            step = { 5 }
            marks min = { 0 }
            max = { 30 }
            onChange = { restTime }

            /> </div>)


        }
        
        

        }

        // console.log(focusTime)


        export default SliderInput;