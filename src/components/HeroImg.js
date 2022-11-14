import React from "react";
import "./HeroImg.css";
//引入圖片
import img from "../assets/hero.avif";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <>
      {/* 背景圖 */}
      <div className="hero">
        <div className="mask">
          <img
            className="intro-img"
            // src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            src={img}
            alt="img"
          />
        </div>
      </div>
      {/* 文字 */}
      <div className="content">
        <h1>Hi, I'm Coco Hsieh.</h1>
        <div className="btn-container">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
