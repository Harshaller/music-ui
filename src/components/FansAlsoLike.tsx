import React from "react";
import maxin from "../assets/images/maxin.png"; // adjust path if needed
import maria from "../assets/images/maria.png";
import david from "../assets/images/david.png";
import sofia from "../assets/images/sofia.png";

const fans = [
  { id: 1, name: "Alex Johnson", image: maxin },
  { id: 2, name: "Maria Lopez", image: maria },
  { id: 3, name: "David Kim", image: david },
  { id: 4, name: "Sophia Patel", image: sofia },
];

const FansAlsoLike: React.FC = () => {
  return (
    <section className="mt-8 md:mt-10">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
        Fans Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {fans.map((fan) => (
          <div
            key={fan.id}
            className="flex flex-col items-center bg-[#1f1f1f] p-3 md:p-4 rounded-lg hover:bg-[#2a2a2a] transition"
          >
            <img
              src={fan.image}
              alt={fan.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-2 md:mb-3"
            />
            <p className="text-xs md:text-sm font-medium text-center md:text-left">
              {fan.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FansAlsoLike;
