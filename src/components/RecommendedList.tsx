import React from "react";

import cover1 from "../assets/images/cover1.jpg";
import cover2 from "../assets/images/cover2.jpg";
import cover3 from "../assets/images/cover3.jpg";
import cover4 from "../assets/images/cover4.jpg";

const recommended = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: cover1 },
  { id: 2, title: "Epic Soundtracks", artist: "Hans Zimmer", image: cover2 },
  { id: 3, title: "Indie Nights", artist: "Arctic Echo", image: cover3 },
  { id: 4, title: "Jazz Essentials", artist: "Miles Davis", image: cover4 },
];


const RecommendedList: React.FC = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-6">Recommended Soundtracks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recommended.map((track) => (
          <div
            key={track.id}
            className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold">{track.title}</h3>
              <p className="text-sm text-gray-400">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedList;
