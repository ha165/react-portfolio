import NavBar from "./components/Navbar/NavBar";
import InTro from "./components/Intro/InTro";
import Tasks from "./components/Tasks/Tasks";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <InTro />
      <Tasks />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
