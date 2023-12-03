import { useState, useEffect } from "react";
import Category from "./components/category/category.jsx";
import SoundList from "./components/SoundList/SoundList.jsx";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import axios from "axios";

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [track, setTrack] = useState(null);
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState(null);

  const fetchTracks = async () => {
    const params = {};
    if (category) {
      params.filterBy = category;
    }

    if (title) {
      params.pattern = title;
    }

    try {
      const response = await axios.get(
        "http://localhost:5010/audio?offset=0&limit=100",
        {
          params,
        }
      );
      const data = response.data.result;
      response.request;

      setTracks([...data]);
    } catch (error) {
      console.error("Error fetching records:", error);
      return;
    }
  };

  useEffect(() => {
    fetchTracks();
  }, [category, title]);

  return (
    <>
      <NavigationBar />
      <SearchBar setTitle={setTitle} />
      <Category setCategory={setCategory} />
      <SoundList tracks={tracks} setTrack={(track) => setTrack(track)} />
      <AudioPlayer track={track} />
    </>
  );
}
