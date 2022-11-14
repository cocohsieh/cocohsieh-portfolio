import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; //fa組的

// rafce

const Navbar = () => {
  //click是初始狀態，setClick是function
  //顯示手機版links
  const [click, setClick] = useState(false); //click初始是false -> "links" -> 不顯示ul
  const handleClick = () => setClick(!click);

  //navbar
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        {/* 設定連結到首頁 */}
        <Link to={"/coco"}>
          <h1>Portfolio</h1>
        </Link>
        <div>
          {/* <ul className="links"> */}
          <ul className={click ? "links active" : "links"}>
            <li>
              <Link to={"/coco"}>Home </Link>
            </li>
            <li>
              <Link to={"/project"}>Project </Link>
            </li>
            <li>
              <Link to={"/about"}>About </Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact </Link>
            </li>
          </ul>
        </div>
        <div className="toggle" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
