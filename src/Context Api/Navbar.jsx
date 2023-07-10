import React, { useState, createContext, useContext } from "react";
import Navlinks from "./Navlinks";
import { useGlobalContext } from "../hooks/context";
// create a context - impor from react
// provider , consumer

export const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "John" });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "John" });
  };
  const { job } = useGlobalContext();

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <div className="container bg-dark text-white shadow-md d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold text-white">Context API</h3>
        </div>
        <div>
          <Navlinks />
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
