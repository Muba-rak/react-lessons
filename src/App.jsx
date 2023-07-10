import "./App.css";
import Navbar from "./prop-drilling/Navbar";
import Navbar2 from "./Context Api/Navbar";
import { createContext } from "react";
import Complexforms from "./components/Complexforms";
import Assignment from "./components/Assignment";
import { useGlobalContext } from "./hooks/context";
import Banner from "./components/Banner";

function App() {
  const { name, age, job, setJob } = useGlobalContext();
  return (
    <div className="container-lg m-auto">
      <div className="vh-100">
        <Navbar2 />
        <Banner />
        <h1> {job} </h1>
        <button onClick={() => setJob("Trader")}> Change </button>
        <Assignment />
      </div>
    </div>
  );
}

export default App;
