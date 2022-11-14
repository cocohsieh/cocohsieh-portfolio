import React from "react";
import "./Footer.css";
import { FaGithub, FaCodepen } from "react-icons/fa"; //fa組的

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div>copyright &copy;{year} Coco Hsieh</div>
        <div>
          <a
            href="https://codepen.io/yifang-hsieh"
            target="_blank"
            rel="noreferrer"
            className="github-icon"
          >
            <FaCodepen size={25} />
          </a>
          <a
            href="https://github.com/cocohsieh"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
