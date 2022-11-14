import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";
import projectImg1 from "../assets/projectImg1.png";

const WorkCard = (props) => {
  return (
    <>
      <div className="project-card card-background">
      <h2 className="project-title">{props.title}</h2>
        <img src={props.img} alt="project" />

        <div className="project-details" style={{ whiteSpace: 'pre-wrap'}}>{props.info}</div>
        <div className="project-btns">
          {/* <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source}  className="btn">
            Source
          </NavLink> */}
          <a href={props.view} target="_blank" rel="noreferrer" className="btn btn-margin" >
            VIEW
          </a>
          <a href={props.source} target="_blank" rel="noreferrer" className="btn btn-light">
            SOURCE
          </a>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
