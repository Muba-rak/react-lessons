import React from "react";
// template out name of user button logout
// user == null please login
// user ? name and btn : please login
const Usercontainer = ({ user, logout, login }) => {
  return (
    <div>
      {user ? (
        <div>
          <h4> {user.name} </h4>
          <button className="btn btn-primary rounded-1" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button className="btn btn-primary rounded-1" onClick={login}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default Usercontainer;
