import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import MusicPlayer from "./components/MusicPlayer";

const songs = [
  {
    name: "A Lovely Night",
    image:
      "https://catholicgirlbloggin.net/wp-content/uploads/2016/12/lalaland.jpg?w=640",
  },
  {
    name: "Aria Math",
    image:
      "https://catholicgirlbloggin.net/wp-content/uploads/2016/12/lalaland.jpg?w=640",
  },
  {
    name: "Pigstep",
    image:
      "https://catholicgirlbloggin.net/wp-content/uploads/2016/12/lalaland.jpg?w=640",
  },
];

const podcasts = [
  {
    name: "CS50 Podcast",
    image:
      "https://catholicgirlbloggin.net/wp-content/uploads/2016/12/lalaland.jpg?w=640",
  },
  {
    name: "Google Cloud Podcast",
    image:
      "https://catholicgirlbloggin.net/wp-content/uploads/2016/12/lalaland.jpg?w=640",
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Section title="Pop" items={songs} />
          <Section title="Shows for you" items={podcasts} />
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default App;
