import React from "react";
import { useState } from "react";

// name -= user
// Ola
//state mgt - useState
// import
const Usestatebasics = () => {
  //   console.log(useState());
  const [name, setName] = useState("User");
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setName("John");
  };
  const increase = () => {
    setNum(num + 1);
  };
  const decrease = () => {
    setNum(num - 1);
  };
  const reset = () => {
    setNum(0);
    setName("User");
  };
  return (
    <div>
      <h1>Use state Basics</h1>
      <h2>Welcome {name} </h2>
      <h1> {num} </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default Usestatebasics;
