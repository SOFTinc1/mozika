import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={50}
      style={{ color: "#facd66" }}
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle size={50} style={{ color: "#facd66" }} onClick={handlePlay} />
  );

export default PlayPause;
