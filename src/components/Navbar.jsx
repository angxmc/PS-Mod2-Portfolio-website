import { Link, useLocation } from "react-router-dom";
import './navbar.css'
import ExternalLink from "./ExternalLink";

export default function NavBar() {
   const location = useLocation();
   const isActressPage = location.pathname === "/actress";
  return (
    <nav className={`navbar ${isActressPage ? "actress-page" : ""}`}>
      <div className="logo">
        <Link to="/">Angelina Chen</Link>
      </div>

      <div className="rightNav">
        <ExternalLink href="https://www.linkedin.com/in/xueming-angelina-chen">
          LinkedIn
        </ExternalLink>
        <ExternalLink href="https://github.com/angxmc">
          GitHub
        </ExternalLink>
        {isActressPage && (
          <ExternalLink href="https://www.instagram.com/angelinaxmchen/">
            Instagram
          </ExternalLink>
        )}
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
