import logo from "./logo.svg";
import "./App.css";
import Navbar from "./comopent/Navbar";
import HomePage from "./comopent/HomePage";
import { useState} from "react";

function App() {
  const [mode, setMode] = useState("light");
  
 
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.backgroundImage = "none";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage =
        "linear-gradient(rgb(216, 225, 250), white)";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}  />
      <HomePage mode={mode} />
    </>
  );
}

export default App;
