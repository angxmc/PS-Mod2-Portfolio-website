import InstagramPage from "./Instagram";
import "./actress.css";
import ExternalLink from "../components/ExternalLink";

export default function Actress() {
  const projects = [
    {
      title: "I'm No Longer Here",
      director: "Fernando Frias",
      year: 2017,
      role: "Lin",
      link: "https://www.netflix.com/title/81025595",
    },
    {
      title: "Daughter",
      director: "Shuyao Chen",
      year: 2018,
      role: "The Daughter",
      link: "",
    },
    {
      title: "Clip: The Power of Suggestion",
      director: "Shuyao Chen",
      year: 2021,
      role: "Lead",
      link: "https://vimeo.com/513587308?share=copy",
    },
    {
      title: "Clip: The Flow",
      director: "Shuyao Chen",
      year: 2021,
      role: "Lead",
      link: "https://vimeo.com/549459704?share=copy",
    },
  ];

  return (
    <div className="actressPage">

      <h1 className="backgroundTitle">I Tell Stories</h1>

      <div className="videoSec">
        {projects.map((project, index) => (
          <div key={index} className="projectDetails">
            <h3 className="projectTitle">
              {project.link
                ? <ExternalLink className="projectLink" href={project.link}>{project.title}</ExternalLink>
                : <span className="projectLink">{project.title}</span>
              }
            </h3>
            <p className="projectInfo">Director: {project.director}</p>
            <p className="projectInfo">Year: {project.year}</p>
            <p className="projectInfo">Role: {project.role}</p>
          </div>
        ))}
      </div>
      <div className="instagram-section">
        <InstagramPage />
      </div>
    </div>
  );
}
