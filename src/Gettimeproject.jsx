import React, { useState } from "react";

const Gettimeproject = () => {

    let newTime = new Date().toLocaleTimeString(); 

    const[ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    return(
        <React.Fragment>
            <h1>{ctime}</h1>
            <div className="container">
                <button onClick={UpdateTime}>Get Time</button>
            </div>
        </React.Fragment>
    )
}

export default Gettimeproject