import React, { useState } from "react";
// input  .value
// controlled input
// value
// onChange Handler
// multiple inputs

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = { firstName, email };
    setUsers((users) => {
      return [...users, person];
    });
    setFirstName("");
    setEmail("");
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">First Name: </label>
            <input
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Register </button>
        </form>

        <h1>Lists of users</h1>
        {users.length === 0 ? (
          <h1>There is no user at this point</h1>
        ) : (
          <div>
            {users.map((u, index) => {
              return (
                <div key={index}>
                  <h3>{u.firstName} </h3>
                  <p>{u.email} </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
