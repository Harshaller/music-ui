import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header: React.FC = () => {
  return (
    <header className="px-6 py-4 bg-gray-900 text-white shadow-sm">
      {/* Top row: Logo + Right side */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          Music UI
        </div>

        {/* Right side: Icons + Buttons (desktop only) */}
        <div className="hidden md:flex items-center gap-4">
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
            <NotificationsIcon fontSize="small" />
          </button>

          {/* Avatar Icon */}
          <button
            className="p-2 rounded-full hover:bg-gray-800 transition"
            aria-label="Profile"
          >
            <AccountCircleIcon fontSize="large" />
          </button>
        </div>

        {/* Right side: Icons only (mobile) */}
        <div className="flex md:hidden items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-gray-800 transition"
            aria-label="Notifications"
          >
            <NotificationsIcon fontSize="small" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-800 transition"
            aria-label="Profile"
          >
            <AccountCircleIcon fontSize="large" />
          </button>
        </div>
      </div>

      {/* Buttons row (mobile only, stacked full width) */}
      <div className="flex flex-col gap-3 mt-4 md:hidden">
        <button className="relative w-full px-6 py-2 rounded-full text-sm font-medium text-white bg-[#121212] hover:opacity-90 transition">
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#00f0ff] bg-[length:200%_200%] animate-gradient">
            <span className="block w-full h-full rounded-full bg-[#121212]"></span>
          </span>
          <span className="relative">Explore Premium</span>
        </button>

        <button className="w-full px-5 py-2 rounded-full bg-[#090613] text-gray-400 hover:opacity-90 transition">
          Install App
        </button>
      </div>
    </header>
  );
};

export default Header;
