import React from "react";
import { icons } from "react-icons";
import "./AboutContent.css";
import { FaCheckCircle } from "react-icons/fa";

const AboutContent = () => {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <div className="left">
          
            <h1>About 關於我</h1>
            
            <p>
              持續學習中的前端工程師，
              <br />
              今年10月取得 iSpan資展國際前端工程師就業養成班結業證書。
              <br />
              <br />
              “Success is the sum of small efforts,
              <br />
               repeated day in and dayout.” 

              ― Robert Collier.
              <br />
              <br />
              這是我很喜歡的一句話，
              <br />
              成功是由一點一滴的努力而堆積而成，
              <br />
              而寫程式的能力也是經由每日學習及練習積累而成。
              <br />
              接觸程式後發現，
              <br />
              我很享受透過寫下一行一行的程式碼，
              <br />
              從無到有、將網頁打造出來的感覺。
            </p>
          </div>
          <div className="right">
            <h1>Skills 技能</h1>
            <div className="line2"></div>
            <ul className="skill-container">
              <div className="skill-li">
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                HTML
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                CSS/SASS
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                BootStrap
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                JavaScript
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                React
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                Git、Github
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
