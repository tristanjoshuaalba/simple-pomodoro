import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const valuetext = (value) => {
    return `${value}`;
}

const PrettySlider = withStyles({
    root: {
        color: '#74BDCB',
        height: 0,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#EFE7BC',
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
        height: 9,
        borderRadius: 8,
    },
    rail: {
        height: 9,
        borderRadius: 8,
    },
})(Slider);

let selected, unselected;
selected = 'dib f5-ns f6 white text-font ba border-freesia b--dotted bw1 br2 mt1 mb1 pt1 pb1 pl3 pr3 w-auto';
unselected = 'dib f5-ns f6 white text-font mt1 mb1  pt1-ns pb1-ns pl3 pr3 pt0 pb0 w-auto'

const SliderInput = ({ focusTime, restTime , statusLabel, phase}) => {
        if(statusLabel === true){
            if(phase === 'focus'){
                return ( <div className = 'center w-75' >
                <div className = { selected } > 
                 Concentrate
                </div> 
 
                
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
                <div className = { unselected } > 
                 Relax
                </div> 
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
            } else { // REST
                return ( <div className = 'center w-75' >
                <div className =  { unselected } > 
                 Concentrate
                </div>  
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
                <div className = { selected } > 
                 Relax
                </div> 
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
            }
            

        } else {
            return ( <div className = 'center w-75' >
            <div className = { unselected } > 
             Concentrate
            </div>  
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
            <div className = { unselected } > 
            Relax
            </div> 

            
            
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


        /* <div className = 'dib f5-ns f6 color-salmon text-font fw6 bg-freesia br2 mt1 mb1 pa1 w-auto'> 
            Relax
            </div> */



            // <Typography id = "discrete-slider"
            // gutterBottom className = 'white' >
            // <div className = 'f5-ns f6 white text-font'> 
            // Relax
            // </div>
            // </Typography> 


            // <Typography 
            // id = "discrete-slider"
            // gutterBottom className = 'white' >
            // <div className = 'f5-ns f6 white text-font'> 
            // Concentrate
            // </div>
            // </Typography> 