import React from "react";
import ReactDOM from "react-dom/client";
import AudioPlayer from "./App";

const audios = [
  {
    src:
      "https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_biiansu_tria_biiansu_longs_cinematic_drones_textures_024.mp3",
    title: "Cyberpunk",
    author: "Eloa Star",
    thumbnail:
      "https://coverartarchive.org/release-group/1cfc9a17-1fdb-30dd-83ca-dce93c481492/front",
    duration : '2:32'
  },
  {
    src:
      "https://cdn.pixabay.com/download/audio/2023/10/20/audio_0f97ca9c9e.mp3",
    title: "Dark Ambient",
    author: "Biiansu",
    thumbnail:
      "https://i.pinimg.com/736x/a2/26/33/a226335f33a63a3d7e60e8ff02d8a087.jpg",
      duration : '0:28',
  },
  {
    src:
      "https://cdn.pixabay.com/audio/2022/07/07/audio_f6dedfee32.mp3",
    title: "Space Odyssey",
    author: "Biiansu",
    thumbnail:
      "https://cdn.pixabay.com/audio/2022/07/07/22-31-09-401_200x200.jpg",
      duration : '2:10',
  },
]; 

// rendering
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioPlayer index={0} audios={audios}/>
  </React.StrictMode>,
);  
