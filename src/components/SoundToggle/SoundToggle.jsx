import { useSound } from "../../context/SoundContext.jsx";
import "./SoundToggle.css";

export default function SoundToggle() {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      type="button"
      className={`sound-toggle ${isMuted ? "is-muted" : "is-active"}`}
      onClick={toggleMute}
      role="switch"
      aria-checked={!isMuted}
      aria-label={
        isMuted
          ? "Sound effects are muted. Click to turn on sound."
          : "Sound effects are on. Click to mute sound."
      }
      title={isMuted ? "Turn sound effects ON" : "Mute sound effects"}
    >
      <div className="sound-toggle__icon-wrap">
        <svg
          className="sound-toggle__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Speaker body */}
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.15" />

          {/* Sound waves when unmuted */}
          {!isMuted ? (
            <>
              <path
                className="sound-toggle__wave sound-toggle__wave--inner"
                d="M15.54 8.46a5 5 0 0 1 0 7.07"
              />
              <path
                className="sound-toggle__wave sound-toggle__wave--outer"
                d="M19.07 4.93a10 10 0 0 1 0 14.14"
              />
            </>
          ) : (
            <>
              {/* Mute slash */}
              <line className="sound-toggle__slash" x1="23" y1="1" x2="1" y2="23" />
            </>
          )}
        </svg>
      </div>

      <span className="sound-toggle__label">
        {isMuted ? "SFX OFF" : "SFX ON"}
      </span>
    </button>
  );
}
