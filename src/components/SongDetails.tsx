import { PlayArrow, Pause, MoreHoriz, FavoriteBorder } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";

// Placeholder images (replace with your actual images later)
import dreamingImg from "../assets/images/dreaming.png";
import goldenImg from "../assets/images/golden.png";
import midnightImg from "../assets/images/midnight.png";
import electricImg from "../assets/images/electric.png";
import serenityImg from "../assets/images/serenity.png";
import cosmicImg from "../assets/images/cosmic.png";
import horizonImg from "../assets/images/horizon.png";

const tracks = [
  {
    title: "Dreaming",
    artist: "Dorian Kinsman",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: dreamingImg,
  },
  {
    title: "Golden Horizon",
    artist: "Arctic Echo",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: goldenImg,
  },
  {
    title: "Midnight Groove",
    artist: "Luna Waves",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: midnightImg,
  },
  {
    title: "Electric Pulse",
    artist: "Neon Drive",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: electricImg,
  },
  {
    title: "Serenity Fields",
    artist: "Aurora Bloom",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: serenityImg,
  },
  {
    title: "Cosmic Voyage",
    artist: "Stellar Drift",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: cosmicImg,
  },
  {
    title: "Rising Horizon",
    artist: "Skyline Dreams",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: horizonImg,
  },
];

// ... keep the rest of your SongDetails component code exactly the same



export default function SongDetails() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (err) {
      console.error("Playback failed:", err);
    }
  };

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
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

 const changeTrack = (track: typeof currentTrack) => {
  setCurrentTrack(track);

  if (audioRef.current) {
    const audio = audioRef.current;
    audio.pause();
    audio.src = track.src;

    // Wait until the new track is loaded before playing
    const onLoaded = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.error("Playback failed:", err);
      }
      audio.removeEventListener("loadeddata", onLoaded);
    };

    audio.addEventListener("loadeddata", onLoaded);
    audio.load(); // trigger load
  }
};


  return (
    <section className="bg-[#121212] md:bg-transparent rounded-lg p-4 md:p-0">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Album art changes dynamically */}
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-40 h-40 md:w-56 md:h-56 rounded-md object-cover"
        />

        {/* Text block */}
        <div className="flex-1">
          <p className="uppercase tracking-wide text-xs text-gray-400 mb-1">Song</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">{currentTrack.title}</h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            {currentTrack.artist} • {formatTime(duration)}
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
            >
              {playing ? <Pause /> : <PlayArrow />}
              <span className="font-semibold">{playing ? "Pause" : "Play"}</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition">
              <FavoriteBorder />
              <span>Save</span>
            </button>

            <button className="p-2 rounded-full bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition">
              <MoreHoriz />
            </button>
          </div>

          {/* Dynamic Gradient Progress bar */}
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <div className="flex-1 h-1 bg-[#2a2a2a] rounded relative overflow-hidden">
              <div
                className="h-1 rounded absolute top-0 left-0"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #ff0080, #7928ca, #2afeb7, #00f0ff)",
                }}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Track Switcher */}
          <div className="mt-6 flex gap-3 flex-wrap">
            {tracks.map((track, idx) => (
              <button
                key={idx}
                onClick={() => changeTrack(track)}
                className="px-3 py-1 rounded bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition text-sm"
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={currentTrack.src} preload="auto" />
    </section>
  );
}
