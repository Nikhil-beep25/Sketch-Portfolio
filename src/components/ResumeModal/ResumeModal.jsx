import { useEffect } from "react";
import "./ResumeModal.css";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview Modal"
    >
      <div
        className="resume-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="resume-modal__header">
          <div className="resume-modal__title-group">
            <span className="resume-modal__badge">CV // PREVIEW</span>
            <h3 className="resume-modal__title">Nikhil_Bhadauriya_Resume.pdf</h3>
          </div>

          <div className="resume-modal__actions">
            <a
              href="/cv/Nikhil_Bhadauriya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-modal__btn resume-modal__btn--tab"
              title="Open PDF in new browser tab"
            >
              <span>NEW TAB &rarr;</span>
            </a>

            <a
              href="/cv/Nikhil_Bhadauriya_Resume.pdf"
              download="Nikhil_Bhadauriya_Resume.pdf"
              className="resume-modal__btn resume-modal__btn--download"
              title="Download PDF to computer"
            >
              <span>DOWNLOAD &darr;</span>
            </a>

            <button
              type="button"
              className="resume-modal__close-btn"
              onClick={onClose}
              aria-label="Close modal"
              title="Close Preview (ESC)"
            >
              &times;
            </button>
          </div>
        </header>

        {/* Modal Body / Viewer */}
        <div className="resume-modal__body">
          <object
            data="/cv/Nikhil_Bhadauriya_Resume.pdf"
            type="application/pdf"
            className="resume-modal__frame"
            aria-label="Nikhil Bhadauriya Resume PDF"
          >
            <div className="resume-modal__fallback">
              <p>Your browser doesn&apos;t support direct PDF viewing.</p>
              <div className="resume-modal__fallback-actions">
                <a
                  href="/cv/Nikhil_Bhadauriya_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-modal__btn resume-modal__btn--tab"
                >
                  Open in New Tab &rarr;
                </a>
                <a
                  href="/cv/Nikhil_Bhadauriya_Resume.pdf"
                  download="Nikhil_Bhadauriya_Resume.pdf"
                  className="resume-modal__btn resume-modal__btn--download"
                >
                  Download PDF &darr;
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
