import React from "react";
import track1 from "../assets/images/track1.png";
import track2 from "../assets/images/track2.png";
import track3 from "../assets/images/track3.png";
import track4 from "../assets/images/track4.png";

const tracks = [
  { title: "Crossroads Of Cash", plays: "26,728,526", duration: "3:21", image: track1 },
  { title: "Dynamic Lines", plays: "106,812,181", duration: "2:33", image: track2 },
  { title: "Midnight Echoes", plays: "54,112,982", duration: "4:05", image: track3 },
  { title: "Golden Horizon", plays: "12,876,451", duration: "3:47", image: track4 },
];

export default function PopularTracks() {
  return (
    <section>
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
        Popular Tracks
      </h3>
      <ul className="space-y-2">
        {tracks.map((track, idx) => (
          <li
            key={idx}
            className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#181818] p-3 rounded-md"
          >
            {/* Left side: image + title */}
            <div className="flex items-center gap-3">
              <img
                src={track.image}
                alt={track.title}
                className="w-12 h-12 md:w-10 md:h-10 rounded-md object-cover"
              />
              <span className="text-sm md:text-base font-medium">{track.title}</span>
            </div>

            {/* Right side: plays + duration */}
            <span className="text-xs md:text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
              {track.plays} • {track.duration}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
