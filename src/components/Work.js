import React from "react";
import "./WorkCard.css";
// import { NavLink } from "react-router-dom";
// import projectImg1 from "../assets/projectImg1.png";
import WorkCard from "./WorkCard";
import ProjectData from "./ProjectData";

const Work = () => {
  return (
    <>
      <div className="work-container">
        {/* <h1 className="project-heading">Projects</h1> */}
        <div className="project-container">
          {/* project-card不寫死 */}
          {ProjectData.map((value, index) => {
            return <WorkCard 
            key={index}
            img={value.img}
            title={value.title}
            info={value.info}
            view={value.view}
            source={value.source}
            />;
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
