import React, { useState } from "react";
import Navlinks from "./Navlinks";
// value from parent sto nested child componenet
// logout - setuser to null
// pass those
// login function setuser === john
const Navbar = () => {
  const [user, setUser] = useState({ name: "John" });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "John" });
  };

  return (
    <div className="container bg-dark text-white shadow-md d-flex justify-content-between align-items-center">
      <div>
        <h3 className="fw-bold text-white">Prop Drilling</h3>
      </div>
      <div>
        <Navlinks user={user} logout={logout} login={login} />
      </div>
    </div>
  );
};

export default Navbar;
