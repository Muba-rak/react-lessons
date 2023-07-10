import React, { useState } from "react";
import Form from "react-bootstrap/Form";

// value  dot notation
// name firstname
// name= 'middleName'

// onchnage Handler

const Complexforms = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "",
  });
  const [mailing, setMailing] = useState(false);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //do whatever action
    console.log(person);

    if (mailing) {
      //add to mailing list
    }
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      middlename: "",
      title: "",
    });
  };
  return (
    <div>
      <div className="okay">
        <form className="form w-50 bg-dark-subtle p-3 rounded-3">
          <h1 className="text-primary text-start h3">Register</h1>
          <div className="my-3">
            <Form.Select
              aria-label="Default select example"
              value={person.title}
              onChange={handleChange}
              name="title"
            >
              <option>Select Title</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="miss">Miss</option>
            </Form.Select>
          </div>
          <div className="my-2">
            <label htmlFor="firstname" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              className="form-control"
              value={person.firstName}
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div className="my-2">
            <label htmlFor="lastname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              value={person.lastName}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="form-label">
              Email :{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={person.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="form-label">
              Password :{" "}
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={person.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={mailing}
              onChange={(e) => setMailing(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Subscribe to Mailing List
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary d-block my-3"
          >
            Register{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complexforms;
