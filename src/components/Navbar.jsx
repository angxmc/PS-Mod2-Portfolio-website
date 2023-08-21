import { Link, useLocation } from "react-router-dom";
import './navbar.css'




export default function NavBar() {
   const location = useLocation();
   const isActressPage = location.pathname === "/actress";
  return (
    <nav className={`navbar ${isActressPage ? "actress-page" : ""}`}>
      <div className="logo">
        <Link to="/">Angelina Chen</Link>
      </div>

      <div className="rightNav">
        <a
          href="https://www.linkedin.com/in/xueming-angelina-chen"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/angxmc"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/angelinaxmchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
