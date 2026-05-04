import InstagramPage from "./Instagram";
import "./actress.css";

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
      title: "Reel Exercise",
      director: "Shuyao Chen",
      year: 2021,
      role: "Daughter",
      link: "",
    },
  ];

  return (
    <div className="actressPage">

      <h1 className="backgroundTitle">I Tell Stories</h1>

      <div className="videoSec">
        {projects.map((project, index) => (
          <div key={index} className="projectDetails">
            <h3 className="projectTitle">
              <a className="projectLink" href={project.link || "#"}>
                {project.title}
              </a>
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
