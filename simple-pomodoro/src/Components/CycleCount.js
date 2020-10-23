import React from 'react';

// Cycle Count Display
const CycleCount = ( { cycle } ) => {
    return (
        <div className = 'f4-ns f5 tc white pa2 v-mid text-font '> 
            CYCLES COMPLETED <span className = 'center f4-ns f5 black pa2 tc bg-white br3 b-dashed' > { cycle } </span>  
        </div>
    )
};


export default CycleCount;