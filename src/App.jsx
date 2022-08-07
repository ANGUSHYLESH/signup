import React from "react";
import Auth from "./components/Signup";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }} />
      <div className="blur" style={{ top: "36%", left: "-8rem" }} />
      <Auth />
    </div>
  );
};

export default App;
