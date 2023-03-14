import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import { getTopSongs, getNewAlbums, getSongs, getGenre } from "./api/api";
import Section from "./components/Section/Section";
import Faqs from "./components/Faqs/Faqs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section title="Top Songs" data={getTopSongs} />
      <Section title="New Albums" data={getNewAlbums} />
      <Section title="Songs" data={getSongs} genre={getGenre} />
      <Faqs />
    </div>
  );
}

export default App;
