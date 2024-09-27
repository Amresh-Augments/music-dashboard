import React from "react";

const MusicPlayer: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 bg-gray-900 text-white flex justify-between items-center">
      <p>Now Playing: Aria Math - C418</p>
      <div className="flex space-x-4">
        <button className="hover:text-green-500">Play</button>
        <button className="hover:text-green-500">Next</button>
        <button className="hover:text-green-500">Previous</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
