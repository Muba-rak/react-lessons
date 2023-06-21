import React, { useState } from "react";

const Usestateobject = () => {
  const [person, setPerson] = useState({
    name: "Adam Owen",
    age: 34,
    gender: "Male",
  });
  const change = () => {
    setPerson({ ...person, age: person.age + 1, gender: "Female" });
  };
  return (
    <div>
      <h1>Use state Object</h1>
      <h3>
        Name: {person.name} Age: {person.age}
      </h3>
      <h4> Gender: {person.gender} </h4>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default Usestateobject;
