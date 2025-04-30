import React from "react";
import "./loading.css";

const Loading=()=>{
  return (
    <div className="loading-container">
      <div className="glow-ring"></div>
      <div className="glow-text">Initializing portfolio </div>
    </div>
  );
}

export default Loading
