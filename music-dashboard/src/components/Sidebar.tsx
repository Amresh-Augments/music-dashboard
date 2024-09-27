import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col p-4 space-y-4 bg-gray-900 text-white h-screen w-60">
      <div className="flex items-center space-x-4">
        <img
          src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png"
          alt="Home"
        />
        <span>Home</span>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png"
          alt="Explore"
        />
        <span>Explore</span>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="https://img.icons8.com/ios/30/ffffff/library.png"
          alt="Library"
        />
        <span>Library</span>
      </div>
    </aside>
  );
};

export default Sidebar;
