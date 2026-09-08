import { useState } from "react";
import ResumeModal from "../../components/ResumeModal/ResumeModal.jsx";
import "./Contact.css";

export default function Contact() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="contact__scraps" aria-hidden="true">
        <span className="contact__scrap contact__scrap--tape-tl" />
        <span className="contact__scrap contact__scrap--paper-bl" />
        <span className="contact__scrap contact__scrap--tape-tr" />
        <span className="contact__scrap contact__scrap--stamp-br" />
        <span className="contact__scrap contact__scrap--paper-tr" />
      </div>

      <div className="contact__container">
        <div className="contact__title-wrapper">
          <h2 className="contact__title">Contact Me</h2>
        </div>

        <div className="contact__notes-grid">
          <a
            href="mailto:nikhilbhadauriya2500@gmail.com"
            className="contact__note contact__note--yellow"
            aria-label="Send email to Nikhil Bhadauriya"
          >
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ EMAIL ]</span>
              <p className="contact__note-text">nikhilbhadauriya2500@gmail.com</p>
              <span className="contact__note-action">{"\u2794\uFE0E"} Write me</span>
            </div>
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__note contact__note--green"
            aria-label="Message on WhatsApp"
          >
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ WHATSAPP ]</span>
              <p className="contact__note-text">WhatsApp</p>
              <span className="contact__note-action">{"\u2794\uFE0E"} Message me</span>
            </div>
          </a>

          <div className="contact__note contact__note--cyan">
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ NETWORKS ]</span>
              <div className="contact__note-socials">
                <a
                  href="https://linkedin.com/in/nikhil-bhadauriya-308414321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn{"\u2197\uFE0E"}
                </a>
                <a
                  href="https://github.com/Nikhil-beep25"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  GitHub{"\u2197\uFE0E"}
                </a>
              </div>
            </div>
          </div>

          <div className="contact__note contact__note--pink">
            <div className="contact__note-glue"></div>
            <div className="contact__note-content">
              <span className="contact__note-tag">[ CURRICULUM VITAE ]</span>
              <div className="contact__note-body">
                <p className="contact__note-text contact__note-text--resume">
                  Nikhil_Bhadauriya_Resume.pdf
                </p>
                <span className="contact__note-role">Full Stack Developer &bull; 2026</span>
              </div>
              <div className="contact__cv-actions">
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="contact__cv-btn contact__cv-btn--view"
                  aria-label="View Resume Preview"
                  title="Preview Resume on screen"
                >
                  VIEW CV &rarr;
                </button>
                <a
                  href="/cv/Nikhil_Bhadauriya_Resume.pdf"
                  download="Nikhil_Bhadauriya_Resume.pdf"
                  className="contact__cv-btn contact__cv-btn--download"
                  aria-label="Download Resume PDF"
                  title="Download Resume PDF"
                >
                  DOWNLOAD &darr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
}
