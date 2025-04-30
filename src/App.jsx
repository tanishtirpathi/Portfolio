import React, { useState } from "react";
import Powerbutton from "./components/powerbutton";
import Main from "./components/page";
import "./App.css";

export default function App() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  const handlePowerOn = () => {
    setIsPoweredOn(true);  
  };

  return (
    <div>
      {!isPoweredOn ? (
        <Powerbutton onPowerOn={handlePowerOn} />
      ) : (
        <Main />
      )}
    </div>
  );
}
