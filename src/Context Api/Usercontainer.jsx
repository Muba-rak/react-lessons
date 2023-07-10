import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";
// fro

const Usercontainer = () => {
  const { user, logout, login } = useContext(NavbarContext);

  return (
    <div>
      {user ? (
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="me-3"> {user.name} </h5>
          <button className="btn btn-primary rounded-1" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-between">
          <button className="btn btn-primary rounded-1" onClick={login}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default Usercontainer;
