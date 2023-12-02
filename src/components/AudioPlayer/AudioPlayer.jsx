import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "/src/components/AudioPlayer/AudioPlayer.css";
import BackwardIcon from "/src/assets/Backward.svg";
import PlayIcon from "/src/assets/Play.svg";
import PauseIcon from "/src/assets/Pause.svg";
import ForwardIcon from "/src/assets/Forward.svg";

export default function AudioPlayer({ track }) {
  const { title, src, genre, thumbnail } = track ?? {
    title: "Please select a track",
    genre: "from the sound list...",
    src: null,
    thumbnail: "src/assets/logo.png",
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const progressBarJumpValue = Number(1.23346890);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    // Reset play state and progress bar when track changes
    setIsPlaying(false);
    setCurrentTime(0);
    progressBar.current.value = 0;
    progressBar.current.style.setProperty("--seek-before-width", "0%");

    // Set the audio source when the component mounts or when the src prop changes
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [track, audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    const actualValue = Number(progressBar.current.value);
    progressBar.current.value = actualValue - progressBarJumpValue;
    changeRange();
  };

  const forwardThirty = () => {
    const actualValue = Number(progressBar.current.value);
    const resVal = actualValue + progressBarJumpValue;
    progressBar.current.value = resVal;
    changeRange();
  };

  return (
    <div className="audioPlayer">
      <div className="player-contents">
        <img src={thumbnail} alt={`${title} thumbnail`} />
        
      </div>
      <div className="player-contents-text">
      <h5>{title}</h5>
      <p className='genre-player'>{genre}</p>
      </div>
      <audio
        ref={audioPlayer}
        src={src}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      ></audio>
      <button className="forwardBackward" onClick={backThirty}>
        <img src={BackwardIcon} alt="Backward" />
      </button>
      <button onClick={togglePlayPause} className="playPause">
        {isPlaying ? <img src={PauseIcon} alt="Pause" /> : <img src={PlayIcon} alt="Play" />}
      </button>
      <button className="forwardBackward" onClick={forwardThirty}>
        <img src={ForwardIcon} alt="Forward" />
      </button>

      {/* current time */}
      <div className="currentTime">{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div>
        <input
          type="range"
          className="progressBar"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div className="duration">
        {duration ? calculateTime(duration) : "00:00"}
      </div>
    </div>
  );
}

AudioPlayer.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    src: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};
