import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import "../styles/songcard.css";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    // <div className="flex flex-col w-[350px] h-full p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="flex flex-col w-[240px] h-full backdrop-blur-sm animate-slideup cursor-pointer song-card-main">
      <div className="relative w-full h-full group">
        <img
          alt="song_img"
          src={song?.images.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          gap: "30px",
          width: "100%",
          height: "100%",
        }}
        className={`bg-black bg-opacity-70 rounded-lg`}
      >
        <div className="mt-4 flex flex-col pl-4 w-[240px]">
          <p
            className="font-semibold text-lg text-white truncate"
            style={{ width: "100px" }}
          >
            {song.title}
          </p>
          <p
            className="text-sm truncate text-gray-300 mt-1"
            style={{ width: "100px" }}
          >
            {song.subtitle}
          </p>
        </div>
        <div
          className={`p-4 justify-start items-center ${
            isPlaying ? "hidden" : "block"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SongCard;

// ${
//   activeSong?.title === song.result.title
//     ? "flex bg-black bg-opacity-70"
//     : "hidden"
// }
