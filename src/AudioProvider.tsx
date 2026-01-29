// src/AudioProvider.tsx
import React, { createContext, useRef, useState, useContext } from "react";

type AudioContextType = {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  togglePlay: () => void;
  currentTrack: { title: string; artist: string; src: string };
};

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = {
    title: "Dreaming",
    artist: "Detart Kinsman",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // ✅ reachable demo MP3
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play(); // ✅ await ensures play actually succeeds
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Playback failed:", err);
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, togglePlay, currentTrack }}>
      {children}
      <audio ref={audioRef} src={currentTrack.src} preload="auto" />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
};
