import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <img
          src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png"
          alt="Music Logo"
          className="h-8"
        />
        <span className="text-xl font-semibold">Music</span>
      </div>
      <input
        type="text"
        placeholder="Search songs, albums, artists, podcasts"
        className="w-1/2 p-2 rounded-lg bg-gray-800 text-white outline-none"
      />
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile"
        className="h-8 rounded-full"
      />
    </nav>
  );
};

export default Navbar;
