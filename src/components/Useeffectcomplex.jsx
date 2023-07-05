import React, { useState, useEffect } from "react";

const Useeffectcomplex = () => {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>USE EFFECT FETCH DATA</h1>

      {users.map((user) => {
        const { id, name, email } = user;
        return (
          <div key={id}>
            <h3> {name} </h3>
            <p> {email} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Useeffectcomplex;
