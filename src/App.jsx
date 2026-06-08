import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import CursorGlow from "./components/CursorGlow";
import ClickRipple from "./components/ClickRipple";

function App() {
  return (
    <>
      <CursorGlow />
      <ClickRipple />
      

      <Navbar />

      <Hero3D />

      <About />

      <Skills />

      <Projects />

      <Services />

      <Contact />

      <Footer />
    </>
  );
}

export default App;