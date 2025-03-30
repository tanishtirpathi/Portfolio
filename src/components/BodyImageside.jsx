import React from "react";
import "./body.css";
function BodyImageside() {
  return (
    <>
      <div className="hero-section">
        <div className="cover">
          <div className="flex">
            <h1 className="title">Frontend engineer</h1>{" "}
            <h2 className="title" id="cool">
              with cool knowledge{" "}
            </h2>
          </div>
          <img
            src="src\components\image.png "
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="flexx">
          <div className="one">
            <button className="portfolio-btn">simple portfolio</button>
            <div>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className="two">
            <button className="portfolio-btn">3d portfolio</button>
            <div>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                  alt="GitHub"
                />
              </a>
              <a href="#">
                <img src="src\components\twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyImageside;
