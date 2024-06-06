import React, { useState } from "react";

const Eventlistner = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple); 
    const [name, setName] = useState('click Me'); 

    const bgChange = () =>{
        // console.log("Hello");
        let newBg = '#34495e';
        setBg(newBg);
        setName('Ouch!!');
        
    };

    const bgBack = () => {
        let doubleBg = "#002366";
        setBg(doubleBg)
    }

    return(
        <React.Fragment>
            <div className="container">
                <button onClick={bgChange} onDoubleClick={bgBack} style={{ backgroundColor : bg }}> {name} </button>
            </div>
        </React.Fragment>
    )
}

export default Eventlistner 