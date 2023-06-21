import React from "react";
// props - pass variables and values from one component to another object

// book title
const Employee = ({ img, name, role, children }) => {
  //const {img, name, role}= props
  console.log(img, role, name);

  return (
    <div className="employees">
      <img src={img} alt={name} />
      <h2> {name} </h2>
      <p>Role: {role} </p>
      <p> {children} </p>
    </div>
  );
};
// prps children
const Employees = () => {
  const workers = [
    {
      id: 1,
      name: "Titi Ade",
      role: "Markating",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Adam Owen",
      role: "Head Of Product",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Fullstack developer",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="test">
      {workers.map((worker, index) => {
        return (
          <Employee key={index} {...worker}>
            any thing
          </Employee>
        );
      })}
    </div>
  );
};

export default Employees;
