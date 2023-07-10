import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const Useeffectcomplex = () => {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const { data: users, isLoading } = useFetch(url);
  return (
    <div>
      <h1>USE EFFECT FETCH DATA</h1>

      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        users.map((user) => {
          const { id, name, email } = user;
          return (
            <div key={id}>
              <h3> {name} </h3>
              <p> {email} </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Useeffectcomplex;
