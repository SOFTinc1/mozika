import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { genres } from "../assets/constants";

import "../styles/discover.css";
import Frame from "../assets/Frame.png";
import MobileFrame from "../assets/mobile.png";

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery(
    genreListId || "POP"
  );
  // console.log(data);

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col discoverDiv">
      <div className="discoverDiv2 w-full flex justify-between items-center">
        <h2 className="font-bold text-3xl text-white text-left discover-text">
          Discover {genreTitle}
        </h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
          className="bg-[#1A1E1F] text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <img src={Frame} alt="banner-image" className="banner-img" />
      <img src={MobileFrame} alt="banner-image" className="mobile-banner-img" />

      <div className="flex flex-wrap sm:justify-start justify-center gap-8 songCard">
        {data.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
