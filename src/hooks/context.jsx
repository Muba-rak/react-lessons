// create a global context
// wrap the entire application
// create a custom hook
//react-router-dom

import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const Appcontext = ({ children }) => {
  const [job, setJob] = useState("developer");

  const email = "test@google.com";
  return (
    <GlobalContext.Provider
      value={{ name: "Peter", age: "65", job, setJob, email }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Appcontext;
