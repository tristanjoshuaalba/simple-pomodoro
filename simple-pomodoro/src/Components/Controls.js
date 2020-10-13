import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const Controller = ({status, reset, statusLabel}) => {
    let label;
    if(statusLabel === false){
        label = 'play'
    } else {
        label = 'pause'
    }

    return ( 
       
        <div className = 'center tc w-75'>
            <h1></h1>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className = 'center tc'>
            <Button className = 'w-100' onClick={status}> {label} </Button>
            <Button className = 'w-100' onClick={reset}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Controller;