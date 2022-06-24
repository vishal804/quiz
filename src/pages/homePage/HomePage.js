import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { homepageimage } from "../../assets";

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="right-side">
          <div className="title">
            Welcome to <span className="main-title">Quiz Corner</span>
          </div>
          <div>
            <p className="sub-title">
              Let's see how much general knowledge You have
            </p>
          </div>
          <div className="btn-container">
            <Link to="/categories">
              <button className="btn btn-primary btn-lg">Start Sloving</button>
            </Link>
          </div>
        </div>
        <div className="left-side">
          <div className="image-container">
            <img
              className="image-style responsive-image"
              src={homepageimage}
              alt="quiz"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
