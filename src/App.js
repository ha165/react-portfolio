import NavBar from "./components/Navbar/NavBar";
import InTro from "./components/Intro/InTro";
import Tasks from "./components/Tasks/Tasks";
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <InTro />
      <Tasks />
    </div>
  );
}

export default App;
