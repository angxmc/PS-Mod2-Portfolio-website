import React, { useEffect } from "react";
import InstagramPage from "./Instagram";
import "./actress.css";

export default function Actress() {
  const projects = [
    {
      title: "I'm No Longer Here",
      director: "Fernando Frias",
      year: 2017,
      role: "Lin",
      video: ``,
      link: "",
    },
    {
      title: "Daughter",
      director: "Shuyao Chen",
      year: 2018,
      role: "The Daughter",
      video: "",
      link: "",
    },
    {
      title: "Reel Exercise",
      director: "Shuyao Chen",
      year: 2021,
      role: "Daughter",
      video: ``,
      link: "",
    },
  ];

  return (
    <div className="actressPage">
      
      <h1 className="backgroundTitle">I Tell Stories</h1>

      <div className="videoSec">
        {projects.map((project, index) => (
          <div key={index} className="act-section-left">
            <video controls>
              <source src={project.video} type="video/mp4" />
            </video>

            <div className="act-section-right">
              <div className="projectDetails">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectInfo">Director: {project.director}</p>
                <p className="projectInfo">Year: {project.year}</p>
                <p className="projectInfo">Role: {project.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>
        <InstagramPage />
      </button>
    </div>
  );
}
