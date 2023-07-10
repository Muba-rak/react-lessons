import React from "react";
import Usercontainer from "./Usercontainer";
// next usercontainer

const Navlinks = ({ user, logout, login }) => {
  const links = ["Home", "About", "Profile", "Contact"];

  return (
    <div>
      <ul className="d-flex justify-content-between align-items-center w-50">
        {links.map((link, index) => {
          return (
            <li key={index} className="  px-3">
              <a href="##" className="text-white text-decoration-none">
                {link}
              </a>
            </li>
          );
        })}
        <Usercontainer user={user} logout={logout} login={login} />
      </ul>
    </div>
  );
};

export default Navlinks;
