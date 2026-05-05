import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css'
import ExternalLink from "./ExternalLink";

export default function NavBar() {
   const location = useLocation();
   const isActressPage = location.pathname === "/actress";
   const isSoftwarePage = location.pathname === "/software";
   const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
    <nav className={`navbar ${isActressPage ? "actress-page" : ""}`}>
      <div className="logo">
        <Link to="/">Angelina Chen</Link>
      </div>

      <div className="rightNav">
        <ExternalLink href="https://www.linkedin.com/in/xueming-angelina-chen">
          LinkedIn
        </ExternalLink>
        {isSoftwarePage && (
          <ExternalLink href="https://github.com/angxmc">
            GitHub
          </ExternalLink>
        )}
        {isActressPage && (
          <ExternalLink href="https://www.instagram.com/angelinaxmchen/">
            Instagram
          </ExternalLink>
        )}
        <a href="#" onClick={(e) => { e.preventDefault(); setShowContactModal(true); }}>Contact</a>
      </div>
    </nav>

    {showContactModal && (
      <div className="ext-overlay" onClick={() => setShowContactModal(false)}>
        <div className="ext-modal" onClick={(e) => e.stopPropagation()}>
          <p>Email: <strong>angexmc@seas.upenn.edu</strong></p>
          <div className="ext-modal-buttons">
            <button className="ext-btn-confirm" onClick={() => { setShowContactModal(false); window.location.href = "mailto:angexmc@seas.upenn.edu"; }}>Yes</button>
            <button className="ext-btn-cancel" onClick={() => setShowContactModal(false)}>No</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
