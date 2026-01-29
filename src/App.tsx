import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SongDetails from "./components/SongDetails";
import RecommendedList from "./components/RecommendedList";
import PopularTracks from "./components/PopularTracks";
import PopularReleases from "./components/PopularReleases";
import PopularAlbums from "./components/PopularAlbums";
import FansAlsoLike from "./components/FansAlsoLike";
import Footer from "./components/Footer";
import PlayerBar from "./components/PlayerBar"; // ✅ matches PlayerBar.tsx
import { AudioProvider } from "./AudioProvider";

export default function App() {
  return (
    <AudioProvider>
      <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">
        {/* Header */}
        <Header />

        {/* Main layout */}
        <div className="flex flex-1">
          {/* Sidebar (responsive) */}
          <Sidebar />

          {/* Main content area */}
          <main className="flex-1 p-6 space-y-10 overflow-y-auto">
            <SongDetails />
            <RecommendedList />
            <PopularTracks />
            <PopularReleases />
            <PopularAlbums />
            <FansAlsoLike />
            <Footer />
          </main>
        </div>

        {/* Player bar at bottom */}
        <PlayerBar />
      </div>
    </AudioProvider>
  );
}
