import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import {
  DEFAULT_DOOR_VOLUME,
  DEFAULT_PAPER_VOLUME,
  SOUND_STORAGE_KEY,
} from "../constants/constants";

const SoundContext = createContext({
  isMuted: false,
  toggleMute: () => {},
  playDoorSound: () => {},
  playPaperSound: () => {},
  doorVolume: DEFAULT_DOOR_VOLUME,
  paperVolume: DEFAULT_PAPER_VOLUME,
});

const DOOR_SOUND_SRC = "/sounds/Door.webm";
const PAPER_SOUND_SRC = "/sounds/Paper.webm";

export function SoundProvider({ children }) {
  const [isMuted, setIsMuted] = useState(() => {
    try {
      const stored = localStorage.getItem(SOUND_STORAGE_KEY);
      return stored !== null ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  const doorAudioRef = useRef(null);
  const paperAudioRef = useRef(null);
  const isMutedRef = useRef(isMuted);

  useEffect(() => {
    isMutedRef.current = isMuted;
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, JSON.stringify(isMuted));
    } catch {
      // Storage unavailable or quota exceeded
    }

    if (isMuted) {
      if (doorAudioRef.current) {
        doorAudioRef.current.pause();
        doorAudioRef.current.currentTime = 0;
      }
      if (paperAudioRef.current) {
        paperAudioRef.current.pause();
        paperAudioRef.current.currentTime = 0;
      }
    }
  }, [isMuted]);

  useEffect(() => {
    const doorAudio = new Audio(DOOR_SOUND_SRC);
    doorAudio.preload = "auto";
    doorAudio.volume = DEFAULT_DOOR_VOLUME;
    doorAudioRef.current = doorAudio;

    const paperAudio = new Audio(PAPER_SOUND_SRC);
    paperAudio.preload = "auto";
    paperAudio.volume = DEFAULT_PAPER_VOLUME;
    paperAudioRef.current = paperAudio;

    const unlockAudio = () => {
      if (doorAudioRef.current) doorAudioRef.current.load();
      if (paperAudioRef.current) paperAudioRef.current.load();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("wheel", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
    window.addEventListener("wheel", unlockAudio, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("wheel", unlockAudio);

      if (doorAudioRef.current) {
        doorAudioRef.current.pause();
        doorAudioRef.current = null;
      }
      if (paperAudioRef.current) {
        paperAudioRef.current.pause();
        paperAudioRef.current = null;
      }
    };
  }, []);

  const playDoorSound = useCallback(() => {
    if (isMutedRef.current) return;
    const audio = doorAudioRef.current;
    if (audio) {
      audio.volume = DEFAULT_DOOR_VOLUME;
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Browser gesture policy or audio load error
      });
    }
  }, []);

  const playPaperSound = useCallback(() => {
    if (isMutedRef.current) return;
    const audio = paperAudioRef.current;
    if (audio) {
      audio.volume = DEFAULT_PAPER_VOLUME;
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Browser gesture policy or audio load error
      });
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        playDoorSound,
        playPaperSound,
        doorVolume: DEFAULT_DOOR_VOLUME,
        paperVolume: DEFAULT_PAPER_VOLUME,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
