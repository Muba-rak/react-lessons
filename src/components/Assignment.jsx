import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Assignment = () => {
  const [person, setPerson] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [uError, setUError] = useState("");
  const [pError, setPError] = useState("");
  const [cpError, setcpError] = useState("");
  const [emailE, setEError] = useState("");

  const [show, setShow] = useState(true);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const [show1, setShow1] = useState(true);

  const handleShow1 = (e) => {
    e.preventDefault();
    setShow1(!show1);
  };

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.username.length < 5) {
      setUError("Minimum username length is 5");
    }
    if (person.password.length < 7) {
      setPError("minimum Password length is 7");
    }
    if (!person.email.includes("@")) {
      setEError("Email is not valid");
    }

    if (person.password !== person.confirmPassword) {
      setcpError("Password and confirm Password don't match");
    }
    console.log(person);
    setPerson({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // setTimeout(() => {
    //   setUError("");
    //   setEError("");
    //   setPError("");
    //   setcpError("");
    // }, 2000);
  };
  return (
    <div>
      <div className="okay">
        <form className="form w-50 m-auto my-5 bg-dark-subtle p-3 rounded-3">
          <h1 className="text-primary text-start h3">Register</h1>
          <div className="my-2">
            <label htmlFor="firstname" className="form-label">
              Username :
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={person.username}
              onChange={handleChange}
              name="username"
              placeholder="Minimum user name length is 5"
            />

            <small style={{ color: "red" }}>{uError} </small>
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
              placeholder="abc@example.com"
            />
            <small style={{ color: "red" }}> {emailE} </small>
          </div>

          <div className="my-2">
            <label htmlFor="password" className="form-label">
              Password :{" "}
            </label>
            <div className="d-flex justify-content-between align-items-center form-control">
              <input
                type={show ? "password" : "text"}
                id="password"
                className="form-control border-0"
                value={person.password}
                onChange={handleChange}
                name="password"
              />
              <button onClick={handleShow} className="pass">
                {" "}
                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
              </button>
            </div>
            <small style={{ color: "red" }}>{pError} </small>
          </div>
          <div className="my-2">
            <label htmlFor="confirm" className="form-label">
              Confirm Password:
            </label>
            <div className="d-flex justify-content-between align-items-center form-control">
              <input
                type={show1 ? "password" : "text"}
                id="confirm"
                className="form-control border-0"
                value={person.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
              <button onClick={handleShow1} className="pass">
                {show1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
              </button>
            </div>

            <small style={{ color: "red" }}>{cpError} </small>
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

export default Assignment;
