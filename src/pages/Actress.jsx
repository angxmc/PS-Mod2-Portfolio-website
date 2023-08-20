import React from "react";
import InstagramPage from "./Instagram";

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
    <div>
      <h1>Acting Portfolio</h1>
      <div className="act-section-left">
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <video controls>
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <div className="act-section-right">
          {projects.map((project, index) => (
            <div key={index}>
              <p>{project.year}</p>
              <h3>{project.title}</h3>
              <p>{project.director}</p>
              <p>{project.role}</p>
            </div>
          ))}
        </div>
      </div>
      <InstagramPage />
    </div>
  );
}
