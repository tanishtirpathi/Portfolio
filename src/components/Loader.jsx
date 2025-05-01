import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="/window.webp" alt="" className="img" />
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
