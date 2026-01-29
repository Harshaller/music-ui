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
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Fans Also Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {fans.map((fan) => (
          <div
            key={fan.id}
            className="flex flex-col items-center bg-[#1f1f1f] p-4 rounded-lg hover:bg-[#2a2a2a] transition"
          >
            <img
              src={fan.image}
              alt={fan.name}
              className="w-32 h-32 rounded-full object-cover mb-3"
            />
            <p className="text-sm font-medium">{fan.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FansAlsoLike;
