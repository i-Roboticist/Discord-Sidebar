import { useState } from "react";
import "./App.css";
import "./components/SideBar"
import SideBar from "./components/SideBar";

function App() {

  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

export default App;
