import { useState } from "react";
import "./ExternalLink.css";

export default function ExternalLink({ href, children, className }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>

      {showModal && (
        <div className="ext-overlay" onClick={() => setShowModal(false)}>
          <div className="ext-modal" onClick={(e) => e.stopPropagation()}>
            <p>You're leaving this site and being redirected to an external website.</p>
            <div className="ext-modal-buttons">
              <button className="ext-btn-confirm" onClick={handleConfirm}>Continue</button>
              <button className="ext-btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
