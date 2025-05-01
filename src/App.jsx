import React, { useState } from "react";
import Powerbutton from "./components/Powebutton";
import Main from "./components/page";
import Loading from "./components/Loader";
import "./App.css";

export default function App() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePowerOn = () => {
    setIsLoading(true); // Show Loading page

    setTimeout(() => {
      setIsPoweredOn(true);
      setIsLoading(false);
    }, 4000); // Duration of loading screen
  };

  return (
    <>
      {!isPoweredOn && !isLoading && <Powerbutton onPowerOn={handlePowerOn} />}
      {isLoading && <Loading />}
      {isPoweredOn && <Main />}
    </>
  );
}
