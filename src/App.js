import NavBar from "./components/Navbar/NavBar";
import InTro from "./components/Intro/InTro";
import Tasks from "./components/Tasks/Tasks";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css';
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : ""
    }}>
      <NavBar />
      <InTro />
      <Tasks />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
