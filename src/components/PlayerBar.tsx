import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useAudio } from "../AudioProvider";

const PlayerBar: React.FC = () => {
  const { audioRef, isPlaying, togglePlay, currentTrack } = useAudio();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, [audioRef]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-gray-800 text-white gap-3 md:gap-0">
      {/* Song Info */}
      <div className="text-center md:text-left">
        <h3 className="text-base md:text-lg font-semibold">{currentTrack?.title}</h3>
        <p className="text-xs md:text-sm text-gray-400">{currentTrack?.artist}</p>
      </div>

      {/* Controls + Progress */}
      <div className="flex items-center gap-3 md:gap-4 w-full md:w-1/2">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-[#AAB3CA]/8 hover:bg-[#AAB3CA]/20 transition"
        >
          {isPlaying ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
        </button>

        <div className="flex-1">
          <div className="h-1 bg-gray-600 rounded-full">
            <div
              className="h-1 bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] md:text-xs text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
