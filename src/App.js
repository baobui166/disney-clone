import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Viewer from "./components/Viewer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Viewer />
    </div>
  );
}

export default App;
