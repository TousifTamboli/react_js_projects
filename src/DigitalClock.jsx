import React, { useState } from "react";

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1)

    return(
        <React.Fragment>
            <h1> {ctime} </h1>
        </React.Fragment>
    )
}

export default DigitalClock