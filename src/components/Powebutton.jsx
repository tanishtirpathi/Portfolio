import React, { useState } from "react";
import "./power.css";

export default function Powerbutton({ onPowerOn }) {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(true);
    setTimeout(() => {
      onPowerOn();  
    }, 200);
  };

  return (
    <div id="body">
      <div className="container">
        <div
          className="power-button"
          style={
            isOn
              ? {
                  boxShadow: "0 0 6px #00ff00, 0 0 10px #00ff55",
                }
              : {}
          }
          onClick={handleClick}
        >
          <div className="power-icon">
            <svg viewBox="0 0 24 24" className="icon">
              <line x1="12" y1="5" x2="12" y2="12" strokeLinecap="round" />
              <path d="M16.24 7.76a6 6 0 1 1-8.48 0" strokeLinecap="round" />
            </svg>
          </div>
          <div
            className="indicator"
            style={
              isOn
                ? {
                    backgroundColor: "#00ff00",
                    boxShadow: "0 0 6px #00ff00, 0 0 10px #00ff55",
                  }
                : {}
            }
          />
        </div>
      </div>
    </div>
  );
}
