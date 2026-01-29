import React from "react";
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa"; // avatar icon

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-sm">
      {/* Left: Logo or Title */}
      <div className="text-2xl font-bold tracking-tight">
        Music UI
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">

          {/* Explore Premium Button */}
<button className="relative px-6 py-2 rounded-full text-sm font-medium text-white bg-[#121212] hover:opacity-90 transition">
  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#00f0ff] bg-[length:200%_200%] animate-gradient">
    <span className="block w-full h-full rounded-full bg-[#121212]"></span>
  </span>
  <span className="relative">Explore Premium</span>
</button>





          {/* Install App Button */}
        <button className="px-5 py-2 rounded-full bg-[#090613] text-gray-400 hover:opacity-90 transition">
          Install App
        </button>
        {/* Alert Icon */}
        <button
          className="p-2 rounded-full hover:bg-gray-800 transition"
          aria-label="Notifications"  
        >
          <FiBell size={20} />
        </button>
      

        {/* Avatar Icon */}
        <button
          className="p-2 rounded-full hover:bg-gray-800 transition"
          aria-label="Profile"
        >
          <FaUserCircle size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
