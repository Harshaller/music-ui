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
    <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Song Info */}
      <div>
        <h3 className="text-lg font-semibold">{currentTrack?.title}</h3>
        <p className="text-sm text-gray-400">{currentTrack?.artist}</p>
      </div>

      {/* Controls + Progress */}
      <div className="flex items-center gap-4 w-1/2">
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
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
