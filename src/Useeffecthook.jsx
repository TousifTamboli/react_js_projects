import React, { useEffect, useState } from "react";

const Useeffecthook = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("Clicked");
  }, []); //[] - only on render page

  const Click = () => {};

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
    </>
  );
};

export default Useeffecthook;
