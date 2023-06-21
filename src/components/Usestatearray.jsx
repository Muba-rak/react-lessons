import React, { useState } from "react";

const Usestatearray = () => {
  const data = [
    { id: 1, name: "Banana" },
    { id: 2, name: "Mangoes" },
    { id: 3, name: "Apples" },
    { id: 4, name: "Cashew" },
  ];
  const [fruits, setFruits] = useState(data);
  const removeFruit = (r) => {
    const filteredFruit = fruits.filter((fruit) => fruit.id !== r);
    setFruits(filteredFruit);
  };
  return (
    <div>
      <h1>USE STATE ARRAY</h1>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            <h3> {fruit.name} </h3>
            <button onClick={() => removeFruit(fruit.id)}>Remove fruit</button>
          </div>
        );
      })}
      <button onClick={() => setFruits([])}>Clear Fruits</button>
      <button onClick={() => setFruits(data)}>Get Fruits</button>
    </div>
  );
};

export default Usestatearray;
