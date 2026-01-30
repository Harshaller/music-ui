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
    <section className="mt-8 md:mt-10">
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center md:text-left">
        Recommended Soundtracks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {recommended.map((track) => (
          <div
            key={track.id}
            className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-48 md:h-40 object-cover"
            />
            <div className="p-3 md:p-4 text-center md:text-left">
              <h3 className="text-sm md:text-md font-semibold">{track.title}</h3>
              <p className="text-xs md:text-sm text-gray-400">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedList;
