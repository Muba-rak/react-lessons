import "./App.css";
import Navbar from "./prop-drilling/Navbar";
import Navbar2 from "./Context Api/Navbar";
import { createContext } from "react";
import Complexforms from "./components/Complexforms";
import Assignment from "./components/Assignment";
import { useGlobalContext } from "./hooks/context";
//
// prop drilling

// three components 1 2 3
// context api

function App() {
  const { num } = useGlobalContext();
  console.log(num);
  return (
    <div className="container-lg m-auto">
      <div className="vh-100">
        <Navbar2 />
        <Assignment />
      </div>
    </div>
  );
}

export default App;
