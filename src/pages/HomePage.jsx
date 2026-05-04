import { Link } from "react-router-dom";
import './homepage.css'

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="leftPanel">
        <div className="content">
          <h1>Technology & Logic</h1>
          <h2>Software Engineer</h2>
          <div className="btn">
            <Link to="/software">Explore</Link>
          </div>
        </div>
      </div>

      <div className="centerSec">
        <div className="content">
          <h1 className="engGreet">Hello</h1>
          <h1 className="chineseGreet">你好</h1>
          <h2>Angelina Xueming Chen</h2>

          <div className="btn">
            <Link to="/about">About Me</Link>
          </div>
        </div>
      </div>

      <div className="rightPanel">
        <div className="content">
          <h1>Creativity & Storytelling</h1>
          <h2>Actress</h2>
          <div className="btn">
            <Link to="/actress">Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
