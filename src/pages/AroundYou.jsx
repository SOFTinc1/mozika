import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "../styles/discover.css";

const AroundYou = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs..." />;

  return (
    <div className="flex flex-col discoverDiv">
      <div className="discoverDiv2 w-full flex justify-between items-center">
        <h2 className="font-bold text-3xl text-white text-left discover-text">
          Songs Around You
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song, i) => (
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

export default AroundYou;
