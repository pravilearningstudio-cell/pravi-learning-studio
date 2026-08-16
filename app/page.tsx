import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Method from "./components/Method";
import Courses from "./components/Courses";
import ProgrammesFees from "./components/ProgrammesFees";
import StudentJourney from "./components/StudentJourney";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WaveDivider from "./components/WaveDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Announcement />
      <Navbar />

      <Hero />
      <WaveDivider />

      <About />
      <WaveDivider />

      <Philosophy />
      <WaveDivider />

      <Method />
      <WaveDivider />

      <Courses />
      <WaveDivider />

      <ProgrammesFees />
      <WaveDivider />

      <StudentJourney />
      <WaveDivider />

      <Register />
      <WaveDivider />

      <Contact />
      <WaveDivider />

      <Footer />
    </main>
  );
}