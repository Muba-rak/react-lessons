import React, { useState } from "react";
//conditional rendering

// multiple return
//short circuit evaluation && || !
// ternary operators

const Conditional = () => {
  const [isLoading, setIsLoading] = useState(false);
  const data = ["Ola", "Ade", "Mofe", "Nike"];
  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Sorry, wait for few minutes</h1>
        </div>
      ) : (
        <div>
          {data.map((person, index) => {
            return <h3 key={index}> {person} </h3>;
          })}
        </div>
      )}
    </div>
  );
};

export default Conditional;
