import { createContext, useContext } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const Appcontext = ({ children }) => {
  const num = 98;
  return (
    <GlobalContext.Provider value={{ num }}>{children}</GlobalContext.Provider>
  );
};

export default Appcontext;
