import NavBar from "./components/Navbar/NavBar";
import InTro from "./components/Intro/InTro";
import Tasks from "./components/Tasks/Tasks";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <InTro />
      <Tasks />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
