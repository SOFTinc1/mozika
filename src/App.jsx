import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay, Navbar } from "./components";
import {
  TopArtists,
  AroundYou,
  Discover,
  Search,
  TopCharts,
} from "./pages";
import "./styles/home.css"

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative home-main">
      {/* <Navbar /> */}
      <div className="flex bg-gradient-to-br from-[#1d2123] to-[#1d2123] home-main2">
      <Sidebar />
      <div className="flex-1 bg-transparent searchContainer">
        {/* <Searchbar /> */}

        <div className="px-6 h-[100vh] overflow-y-scroll hide-scrollbar routes">
          <div className="flex-0 h-fit pb-40 route">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit top-plays">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div
          className="flex animate-slideup bg-gradient-to-br from-[#1d2123/0.3] to-[#1d2123/0.3] backdrop-blur-lg z-10 music-player"
          style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <MusicPlayer />
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
