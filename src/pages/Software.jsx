import './software.css'
import ExternalLink from '../components/ExternalLink'

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
                <ExternalLink className="projectLink" href={project.link}>
                  {project.title}
                </ExternalLink>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
