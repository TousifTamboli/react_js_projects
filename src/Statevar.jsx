import React, { useState } from "react";

const Statevar = () => {
  const [name, Setname] = useState(0);

  const incNum = () => {
    Setname(name + 1);
  };

  const decNum = () => {
    if (name > 0) {
      Setname(name - 1);
    } else {
      alert("Sorry Limit Reached");
      Setname(0);
    }
  };

  return (
    <>
      <div className="main">
        <div className="center_div">
          <h1> {name} </h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statevar;
