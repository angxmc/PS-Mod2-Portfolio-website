import React from "react";

export default function SoftwareEngineer() {
  const projects = [
    {
      title: "Tetris Game",
      link: "https://thriving-taffy-350dcb.netlify.app/",
    },
  ];
  return (
    <div>
      <h1> Welcome! </h1>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>
            <a href={project.link} target="_blank">
              {project.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
}
