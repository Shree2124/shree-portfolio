import Navbar from "./components/Navbar";
import Home from "./sections/HomeSection";
import About from "./sections/AboutSection";
import Projects from "./sections/ProjectsSection";
import Contact from "./sections/ContactSection";
import MySkills from "./sections/SkillSection";
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <MySkills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
