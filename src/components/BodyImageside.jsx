import React from "react";
import "./body.css";
import MyGithubCalendar from "./github";
function BodyImageside() {
  const Simple = () => {
    window.location.href = " https://tanishtirpathi.github.io/tanish/";
  };
  const aert = () => {
    alert("sorry this is under the maintaince .");
  };
  return (
    <>
      <div className="hero-section">
        <div className="cover">
          <div className="flex">
            <h1 className="title">Full-stack engineer</h1>
            <h2 className="title" id="cool">
              with cool knowledge
            </h2>
          </div>
          <img src="/image.png " alt="Profile" className="profile-img" />
        </div>
        <div className="flexx">
          <div className="one">
            <button className="portfolio-btn" onClick={Simple}>
              simple portfolio
            </button>
            <div className="flex justify-center items-center">
              <a href="https://www.linkedin.com/in/tanishtirpathi/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.instagram.com/tanish.tirpathi/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className="two">
            <button className="portfolio-btn" onClick={aert}>
              3d portfolio
            </button>
            <div className="flex justify-center items-center">
              <a href="https://github.com/tanishtirpathi">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                  alt="GitHub"
                />
              </a>
              <a href="https://x.com/tanishtirpathi">
                <img src="/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
      
        </div>   <div className="flex justify-center items-center">
           <MyGithubCalendar/>
        </div>
      </div>
    </>
  );
}

export default BodyImageside;
