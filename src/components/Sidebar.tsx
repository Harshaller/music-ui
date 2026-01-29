import React, { useState } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const dummyTracks = [
  { title: "Victory Anthem", artist: "DJ Energy" },
  { title: "Fast Break", artist: "The Hoopsters" },
  { title: "Goal Rush", artist: "Kickoff Crew" },
  { title: "Endurance", artist: "Marathon Minds" },
  { title: "Final Lap", artist: "Speedwave" },
  { title: "Champion Spirit", artist: "Simon Beats" },
];

export default function Sidebar() {
  const [search, setSearch] = useState("");

  const filteredTracks = dummyTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-64 bg-[#121212] text-white p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <LibraryMusicIcon fontSize="small" />
        <h2 className="text-lg font-semibold">Your Library</h2>
      </div>
     

      {/* Playlist Chip */}
      <div>
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#1a1a1a] text-gray-300">
          Playlist
        </span>
      </div>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search playlist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-[#1a1a1a] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Playlist Tracks */}
      <ul className="space-y-2">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 p-2 rounded-md bg-[#1a1a1a] hover:bg-[#1f1f1f] transition"
            >
              <MusicNoteIcon fontSize="small" className="text-gray-400" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{track.title}</span>
                <span className="text-xs text-gray-400">{track.artist}</span>
              </div>
            </li>
          ))
        ) : (
          <li className="text-sm text-gray-500">No tracks found</li>
        )}
      </ul>
    </aside>
  );
}
