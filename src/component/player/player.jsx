import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";
import PropTypes from "prop-types";
import './App.css' 

const AudioPlayer = ({ audios }) => { 

AudioPlayer.propTypes = {
  audios: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    })
  ).isRequired,
};  
  // remove the type annotation from the index state
  const [index, setIndex] = useState(0); // <-- this defines the setIndex function
  //const [track, setTrack] = useState(audios[index]);  
  const [audio] = useState(new Audio(audios[index].src)); // use the src from the audios array
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(audio);
  const progressBarRef = useRef(null);

  // function to format the time in minutes and seconds
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const playPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + audios.length) % audios.length);
    setPlaying(false); // pause before changing the source
  };
  
  const playNext = () => {
    setIndex( (prevIndex) => (prevIndex + 1) % audios.length);
    setPlaying(true);
  };

  const togglePlay = () => {
    setPlaying((prevPlaying) => {
      if (prevPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      return !prevPlaying;
    });
  };
  
  //This function was hard to do and i used a lot of assists, getting my head around it took more time than expected.
  const handleProgressClick = (e) => {
    // get the width of the progress bar
    const width = progressBarRef.current.offsetWidth;
    // get the x position of the click
    const x = e.nativeEvent.offsetX;
    // calculate the percentage of the click position
    const percentage = x / width;
    // calculate the new current time
    const newCurrentTime = percentage * duration;
    // update the current time state
    setCurrentTime(newCurrentTime);
    // update the audio element current time
    audioRef.current.currentTime = newCurrentTime;
  };

   // define your functions to change the index here, such as nextTrack, prevTrack, selectTrack, etc.

  // Effect for when audio changes, this is the player


  useEffect(() => {
    const audio = audioRef.current;
  
    const updateDuration = () => {
      setDuration(audio.duration);
    };
  
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };
  
    const resetTime = () => {
      setCurrentTime(0);
      setProgress(0);
      setPlaying(false);
    };
  
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", resetTime);
  
    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", resetTime);
    };
  }, [audio, duration]);

  useEffect(() => {
    // Update the audio source when the index changes
    audioRef.current.src = audios[index].src;
    // Reset the playing state when changing tracks
    setPlaying(false);
  }, [index, audios]);
  
  return (
    <div className="audio-player">
      <h1>Audio Player</h1>
      <div className="audio-info">
        <div className = "audio-thumbnail">
        <img 
        src={audios[index].thumbnail} 
        alt="thumbnail" 
        style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </div>
        <div className="audio-text">
          <p>Track {index + 1} of {audios.length}</p>
          <h2>{audios[index].title}</h2> 
          <h3>{audios[index].author}</h3> 
        </div>
        
      </div>

      <div className="audio-time">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
        </div>
        <div className="audio-progress" 
        onClick={handleProgressClick} 
        ref={progressBarRef} 
        style={{ 
        width: '600px',
        minHeight: '10px', 
        background: 'lightgray', 
        cursor: 'pointer', 
        position: 'relative'}}>
        <div
          className="audio-progress-bar"
          style={{ width: `${progress}%`, height: '100%', background: 'green' }}
        >
          <div
            className = "audio-current-time-indicator"
            style = {{
              position: 'absolute',
              top: 0,
              left: `${(currentTime / duration)* 100}%`,
              height: '100%',
              width: '4px',
              background: 'red',
            }}
            >
            </div>
          </div>
        </div>

      <div className="audio-controls">
        <button onClick={playPrev}>
          <FaBackward />
        </button>
        <button onClick={togglePlay}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={playNext}>
          <FaForward />
        </button>
      </div>
    </div>
  );
};


export default AudioPlayer;
