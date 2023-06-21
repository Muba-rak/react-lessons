import React, { useState } from "react";
//conditional rendering
// multiple return
//short circuit evaluation && || !
// ternary operators

const Conditional = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);

  //   if (isLoading) {
  //     return <h1>LOADING....</h1>;
  //   }
  // true && false = false true || false = t  false && true = false

  //   if (isError) {
  //     return <h1>Eror...</h1>;
  //   }

  return (
    <div>
      {/* <h1> {isLoading && "Loading...."}</h1>
      <h1> {isError && "Error...."} </h1> */}
      {isLoading ? <h1>Loading...</h1> : <h1>Data....</h1>}
      <button onClick={() => setIsLoading(!isLoading)}>Toggle State</button>
    </div>
  );
};

export default Conditional;
