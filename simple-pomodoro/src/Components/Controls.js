import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const Controller = ({status, reset, statusLabel, button}) => {
    let label;
    if(button === true){
        label = 'Start'
        return ( 
       
            <div className = 'center tc w-75'>
                <h1></h1>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className = 'center tc'>
                <Button className = 'w-100' style = {{backgroundColor: '#74BDCB'}}onClick={status}> 
                    <span className = 'text-font white'> {label} </span> </Button>
                </ButtonGroup>
            </div>
        )
    } else {
        label = 'Start'
        return ( 
       
            <div className = 'center tc w-75'>
                <h1></h1>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className = 'center tc'>
                <Button className = 'w-100 ' onClick={status}disabled
                >  <span className = 'text-font'> {label} </span> </Button>
                </ButtonGroup>
            </div>
        )
    }


}

export default Controller;