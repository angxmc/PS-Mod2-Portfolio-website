import React from "react";
import './software.css'

export default function SoftwareEngineer() {
  const projects = [
    {
      title: "Tetris Game",
      link: "https://thriving-taffy-350dcb.netlify.app/",
    },
    // Add more projects here
  ];

  return (
    <div className="softwarePage">
      <h1 className="softwareTitle-left">Hello</h1>
      <h1 className="softwareTitle-right">World</h1>
      <div className="projectPanels">
        {projects.map((project, index) => (
          <div key={index} className="projectPanel">
            <div className="projectContent">
              <h3 className="projectTitle">
                <a
                  className="projectLink"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
