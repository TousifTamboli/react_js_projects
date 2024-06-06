import React, { useState } from "react";

const App = () => {

const state = useState()
// console.log(state);

const [count, setCount] = useState(0);

const IncNum = () => {
  setCount(count + 1);

  // console.log("Clicked " + count++);
}
  return(
    <>
      <h1> {count} </h1>
      <div>
        <button onClick={IncNum} className="container">Click Me</button>
      </div>
    </>
  )
}

export default App